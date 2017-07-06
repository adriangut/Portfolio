var Dragon  = require("../models/dragon"),
    Comment = require("../models/comment");

//declare middleware object
var middlewareObj = {};

//push methods
middlewareObj.checkDragonOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Dragon.findById(req.params.id, function(err, foundDragon){
            if(err){
                req.flash("error", "Dragon not found.");
                res.redirect("back");
            } else {
                //does user own the dragon?
                if(foundDragon.author.id.equals(req.user._id) || req.user.isAdmin){
                    next();
                } else {
                    req.flash("error", "Permission denied.");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that.");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                //does user own the comment?
                if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin){
                    next();
                } else {
                    req.flash("error", "Permission denied.");
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You must be logged in to do that.");
    res.redirect("/login");
};

//export full module
module.exports = middlewareObj;