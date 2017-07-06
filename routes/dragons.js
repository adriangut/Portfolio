var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Dragon      = require("../models/dragon"),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware"),
    geocoder    = require("geocoder");

//defining escaperegex for searchbar
function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

//index - show all dragons
router.get("/", function(req, res){
    //check if there was a query search
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Dragon.find({name: regex}, function(err, allDragons){
            if(err){
                console.log(err);
            } else {
                res.render("dragons/index", {dragons: allDragons, page: "dragons"});   //currentUser: req.user
            }
        });
    } else {
    //get all dragons from db
        Dragon.find({}, function(err, allDragons){
            if(err){
                console.log(err);
            } else {
                res.render("dragons/index", {dragons: allDragons, page: "dragons"});   //currentUser: req.user
            }
        });
    }
});

//new - show form to create dragon
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("dragons/new");
});

//show - shows more info about one dragon
router.get("/:id", function(req, res){
    //find the dragon with provided ID
    Dragon.findById(req.params.id).populate("comments").exec(function(err, foundDragon){
       if(err){
           console.log(err);
       } else {
           res.render("dragons/show", {dragon: foundDragon});
       }
    });
});

//CREATE = add new dragon to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    var name    = req.body.name,
        price   = req.body.price,
        image   = req.body.image,
        desc    = req.body.description,
        author  = {
        id: req.user._id,
        username: req.user.username
    };
    geocoder.geocode(req.body.location, function(err, data){
        if(err){
            console.log(err);
        }
        var lat         = data.results[0].geometry.location.lat,
            lng         = data.results[0].geometry.location.lng,
            location    = data.results[0].formatted_address,
            newDragon   = {name: name, price: price, image: image, description: desc, author: author, location: location, lat: lat, lng: lng};
        //create and save new dragon to DB
        Dragon.create(newDragon, function(err, newlyCreated){
            if(err){
                console.log(err);
            } else{
                res.redirect("/dragons");
            }
        });
    });
});

//edit dragon route
router.get("/:id/edit", middleware.checkDragonOwnership, function(req, res){
        Dragon.findById(req.params.id, function(err, foundDragon){
            if(err){
                console.log(err);
            }
            res.render("dragons/edit", {dragon: foundDragon});
    });
});

//update dragon route
router.put("/:id", middleware.checkDragonOwnership, function(req, res){
    var name    = req.body.name;
    var price   = req.body.price;
    var image   = req.body.image;
    var desc    = req.body.description;
    geocoder.geocode(req.body.location, function(err, data){
        if(err){
            console.log(err);
        }
        var lat         = data.results[0].geometry.location.lat;
        var lng         = data.results[0].geometry.location.lng;
        var location    = data.results[0].formatted_address;
        var newData     = {name: name, image: image, price: price, description: desc, location: location, lat: lat, lng: lng};
        Dragon.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, updatedDragon){
            if(err){
                res.redirect("/dragons");
            } else {
                req.flash("success", "Updated " + updatedDragon.name + " successfully!");
                res.redirect("/dragons/" + req.params.id);
            }
        });
    });
});

//destroy dragon route
router.delete("/:id", middleware.checkDragonOwnership, function(req, res){
    Dragon.findByIdAndRemove(req.params.id, function(err, dragon){
        if(err){
            console.log(err);
        }
        //remove all comments tied to this dragon
        Comment.remove({
          _id: {
            $in: dragon.comments
          }
        }, function(err, comments){
                if(err){
                    console.log(err);
                }
                req.flash("success", dragon.name + ' was deleted successfully.');
                res.redirect('/dragons');
        });
  });
});


module.exports = router;