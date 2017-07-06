var mongoose    = require("mongoose"),
    Dragon      = require("./models/dragon"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://s-media-cache-ak0.pinimg.com/736x/0c/3c/06/0c3c06f82a666be66e226c5ed27dc6ce--michigan-state-parks-michigan-org.jpg",
        description: "blah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. blah"
    },
    {
        name: "Calm Rock",
        image: "http://i.imgur.com/nGSZnHN.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. blah blah"
    },
    {
        name: "Seaman's Solitude",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. blah blah"
    }
];

function seedDB(){
    //remove all dragons
    Dragon.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed dragons");
        // //add a few dragons
        // data.forEach(function(seed){
        //   Dragon.create(seed, function(err, dragon){
        //       if (err){
        //           console.log(err);
        //       } else {
        //           console.log("added a dragon");
        //           //create a comment on each dragon
        //           Comment.create(
        //               {
        //                   text: "This place is great, but I wish it had internet.",
        //                   author: "Homer"
        //               }, function(err, comment){
        //                   if(err){
        //                       console.log(err);
        //                   } else {
        //                   dragon.comments.push(comment);
        //                   dragon.save();
        //                   console.log("created new comment");
        //                   }
        //               });
        //       }
        //   });
        // });
    });
    //add a few comments
}

module.exports = seedDB;
