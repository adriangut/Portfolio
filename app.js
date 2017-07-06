var express         = require("express"),
    bodyParser      = require("body-parser"),
    flash           = require("connect-flash"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    passport        = require("passport"),
    cookieParser    = require("cookie-parser"),
    LocalStrategy   = require("passport-local"),
    Comment         = require("./models/comment"),
    Dragon          = require("./models/dragon"),
    User            = require("./models/user"),
    seedDB          = require("./seeds"),
    app             = express();
    
//configure dotenv
require("dotenv").load()
    
//requiring routes    
var commentRoutes   = require("./routes/comments"),
    dragonRoutes    = require("./routes/dragons"),
    indexRoutes     = require("./routes/index");

//initializing database
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/yelp_camp_FINAL"); //LOCAL DATABASE CONNECTION
mongoose.connect("mongodb://adrian:krakow2015@ds151452.mlab.com:51452/dragonslayer");

//initializing core
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(cookieParser('secret'));
app.use(flash());
app.locals.moment = require("moment");
// seedDB();    //SEED THE DATABASE, DEPRECATED, REMAINS FOR HISTORICAL PURPOSES

//passport configuration
app.use(require("express-session")({
    secret: "The cutest cat I know is my girlfriend's",
    resave: false,
    saveUninitialized: false
}));

//initializing user functions
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//forwarding to all files
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//declaring routes
app.use("/dragons", dragonRoutes);
app.use("/dragons/:id/comments", commentRoutes);
app.use(indexRoutes);


//turning the site on
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("DragonSlayer server has started.");
});