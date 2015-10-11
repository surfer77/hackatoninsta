Meteor.methods({

    getIgUserId: function(instagramUser){

        console.log("called!");

        Future = Npm.require('fibers/future');
        var myFuture = new Future();
        var accessTokenCurrentUser =    Meteor.user().services.instagram.accessToken;


        var url = "https://api.instagram.com/v1/users/search?q=" + instagramUser +"&access_token=" + accessTokenCurrentUser;

        Meteor.http.get(url, function(error, results){
            if(error){
                myFuture.throw(error);
            } else {
                myFuture.return(results);
            }
        });

        console.log( myFuture.wait() );
        return myFuture.wait();
    },


    getInstagramData: function(userPicked, exportType) {

        console.log("called!");

        Future = Npm.require('fibers/future');
        var myFuture = new Future();
        var accessTokenCurrentUser =    Meteor.user().services.instagram.accessToken;


        var url = "https://api.instagram.com/v1/users/" + userPicked + "/" + exportType + "access_token=" + accessTokenCurrentUser + "&count=300";

        Meteor.http.get(url, function(error, results){
            if(error){
                myFuture.throw(error);
            } else {
                myFuture.return(results);
            }
        });

        console.log( myFuture.wait() );
        return myFuture.wait();


    },

});



