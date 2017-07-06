var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user"),
    Dragon      = require("../models/dragon");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

//show register form
router.get("/register", function(req, res){
    res.render("register", {page: "register"});
});
//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({
            username:   req.body.username,
            firstName:  req.body.firstName,
            lastName:   req.body.lastName,
            email:      req.body.email,
            avatar:     req.body.avatar
    });
    if(req.body.adminCode === process.env.ADMINPASS){
        newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        } 
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp, " +user.username + "!");
            res.redirect("/dragons");
        });
    });
});

//show login form
router.get("/login", function(req, res){
    res.render("login", {page: "login"});
});
//handling login logic
router.post("/login", passport.authenticate("local", 
    {   successRedirect: "/dragons",
        failureRedirect: "/login",
        failureFlash: true,
        successFlash: "Welcome back!"
        }), function(req, res){
});

//logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/dragons");
});

//user profile route
router.get("/users/:id", function(req, res){
   User.findById(req.params.id, function(err, foundUser){
       if(err){
           req.flash("error", "User not found.");
           res.redirect("/");
       } 
        Dragon.find().where("author.id").equals(foundUser._id).exec(function(err, dragons){
            if(err){
               req.flash("error", "User not found.");
               res.redirect("/");
            } 
            res.render("users/show", {user: foundUser, dragons: dragons});
       });
    });   
});

//404
router.get("/*", function(req, res){
    req.flash("error", "Requested page was not found.");
    res.redirect("/dragons");
});


module.exports = router;