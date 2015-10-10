Meteor.methods({

    getIgUserId: function(instagramUser){

        console.log("called!");

        Future = Npm.require('fibers/future');
        var myFuture = new Future();


        var url = "https://api.instagram.com/v1/users/search?q=" + instagramUser +"&access_token=2230715033.83882ae.30f41db8da944f63a024e6746be9e9b4&count=2000";

        Meteor.http.get(url, function(error, results){
            if(error){
                myFuture.throw(error);
            } else {
                myFuture.return(results);
            }
        });

        console.log( myFuture.wait() );
        return myFuture.wait();
    }

});



