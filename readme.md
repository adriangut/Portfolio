#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
 
Each Campground has:
 * Name
 * Image

#Layout and Basic Styling

* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds

* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form* 

#Style the campgrounds page

* Add a better header/title
* Make campgrounds display in a grid* 

#Style the Navbar and Form

* Add a navbar to all templates
* Style the new campground form

#Add Mongoose

* Install and configure mongoose
* Setup campgrounds model
* Use campgrounds model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collections.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment Model!
* Make our errors go away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#Add User Model
* Install all packages needed for auth
* Define User model

#Auth part 1 - Add User Model
* Install all packages needed for auth
* Define User model

#Auth part 2 - Register
* Configure Passport
* Add register routes
* Add register template

#Auth part 3 - Login
* Add login routes
* Add login template

#Auth part 4 - Logout/Navbar
* Add logout route
* Prevent user for adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

#Auth part 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

#Refactor The Routes
* Use Express router to reorganize all routes

#Users + Comments
* Associate Users and Comments
* Save author's name to a comment automatically

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

#Deleting Campgrounds
* Add Destroy Route
* Add Delete button

#Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route: <!--/campgrounds/:id/edit-->
Comment Edit Route:   <!--/campgrounds/:id/comments/:comment_id/edit-->

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route:    /campgrounds/:id/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

#Adding Landing Page Styles
* Styling the basics
* Adding modernizr

#Dynamic Prices

#Searchbar

#Styling Index Page

#Adding User Profiles

#Adding Admin User Type

#REMAKING YELPCAMP TO DRAGONSLAYER, A PAGE ABOUT DRAGONS

* BOOTSTRAP NAV COLLPASE JS
* Flash Messages
* Refactor container div to header
* Show/hide delete and update buttons
* style login/register forms
* Random Background Landing Page
* Refactor middleware
* change styling in show template - comment delete/update
* UPDATE/DELETE CAMPGROUND


















RESTFUL routes
name    path            verb    purpose                                             mongoose method
=====================================================================================================
index   /dogs           GET     List all dogs                                       dog.find()
new     /dogs/new       GET     Show new dog form                                   N/A
create  /dogs           POST    Create a new dog, then redirect somewhere           dog.create()
show    /dogs/:id       GET     Show info about one specific dog                    dog.findById()
edit    /dogs/:id/edit  GET     Show edit form for one dog                          dog.findById()
update  /dogs/:id       PUT     Update a particular dog, then redirect somewhere    dog.findByIdAndUpdate()
destroy /dogs/:id       DESTROY Delete a particular dog, then redirect somewhere    dog.findByIdAndRemove()

INDEX   /campgrounds        GET
NEW     /campgrounds/new    GET
CREATE  /campgrounds        POST
SHOW    /campgrounds/:id    GET

//comments

NEW     /campgrounds/:id/comments/new   GET
CREATE  /campgrounds/:id/comments       POST