# DragonSlayer

* Add Landing Page
* Add Dragons Page that lists all dragons
 
Each Dragon has:
 * Name
 * Image

#Layout and Basic Styling

* Create our header and footer partials
* Add in Bootstrap

#Creating New Dragons

* Setup new dragon POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form* 

#Style the dragons page

* Add a better header/title
* Make dragons display in a grid* 

#Style the Navbar and Form

* Add a navbar to all templates
* Style the new dragon form

#Add Mongoose

* Install and configure mongoose
* Setup dragons model
* Use dragons model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our dragon model
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
* Display comments on dragon show page

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

#Users + Dragons
* Prevent an unauthenticated user from creating a dragon
* Save username+id to newly created dragon

#Editing Dragons
* Add Method-Override
* Add Edit Route for Dragons
* Add Link to Edit Page
* Add Update Route

#Deleting Dragons
* Add Destroy Route
* Add Delete button

#Authorization Part 1: Dragons
* User can only edit his/her dragons
* User can only delete his/her dragons
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!--Dragon Edit Route: <!--/dragons/:id/edit-->
<!--Comment Edit Route:   <!--/dragons/:id/comments/:comment_id/edit-->

#Deleting Comments
* Add Destroy route
* Add Delete button

<!--Dragon Destroy Route: /dragons/:id-->
<!--Comment Destroy Route:    /dragons/:id/comments/:comment_id-->

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
* Style the basics
* Add modernizr

#Dynamic Prices
* Add price to dragon model, with a min value of 0 and a step of 0.01
* Make the show page dynamically update the price if edited
* Show price as 'Free!' if equal to 0

#Searchbar
* Add searchbar to index page
* Setup for dynamic searchbar via AJAX

#Styling Index Page
* Update the dragons to take less space in higher resolutions
* Modify footer to have more info (will apply to all pages)

#Adding User Profiles
* Add firstName, lastName, email and avatar vars to user model
* Can be set during registration
* Style user pages
* Add lorem ipsum in potential user.description div

#Adding Admin User Type
* Add a isAdmin bool to user model
* Add a pass to check for during registration
* Add the ability to edit and delete regardless of ownership for admin type users