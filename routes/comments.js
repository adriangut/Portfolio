var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Dragon      = require("../models/dragon"),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware");

//comments new
router.get("/new", middleware.isLoggedIn, function(req, res){
    //find dragons by id
    Dragon.findById(req.params.id, function(err, dragon){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {dragon: dragon});
        }
    });
});

//comments create
router.post("/", middleware.isLoggedIn, function(req, res){
    //look up dragons using id
    Dragon.findById(req.params.id, function(err, dragon){
        if(err){
            req.flash("error", "Something went wrong.");
            console.log(err);
            res.redirect("/dragons");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //add username and id to comment, then save
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    dragon.comments.push(comment);
                    dragon.save();
                    console.log(comment);
                    req.flash("success", "Successfully added comment.");
                    res.redirect("/dragons/" + dragon._id);
                }
            }
        )}
    });
});

//comment edit route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {dragon_id: req.params.id, comment: foundComment});
        }
    });
});

//comment update route
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment,function(err, foundComment){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/dragons/" + req.params.id);
        }
    });
});

//comment destroy route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        } else {
            Dragon.findByIdAndUpdate(req.params.id, {
                $pull: {
                    comments: Comment.id
                }
            }, function(err){
                if(err){
                    console.log(err);
                } else {
                    req.flash("success", "Comment deleted.");
                    res.redirect("/dragons/" + req.params.id);
                }
            });
        }
    });
});


module.exports = router;