Template.trials.helpers({
    returnSearchedUsers:function(){
        return InstagramSearchedUsers.find();
    },

    currentUsername:function(){
        return Meteor.user().services.instagram.username;
    },
    currentUserId:function(){
                return Meteor.user().services.instagram.id;

    },

});

Template.trials.events({
    'click #searchIgUser': function() {
        instagramUser = $(".form-control").val();
        getIgUserId = Meteor.call("getIgUserId", instagramUser,  function (error, result) {
         console.log(result);
});

   },

    "change #otherUser": function(){
                        $('#myModal').modal({
                        show: 'false'
                    });
    },

    "click .radioSelect":function(){
            if ($( "input:radio[name=followType]:checked" ).val() == "follows?"){
                exportType = "follows?";
                console.log(exportType);}
            else{
                exportType = "followed-by?";
            console.log(exportType);   }

    },


    'click #submitButton': function() {
        getInstagramData = Meteor.call("getInstagramData", userPicked, exportType,  function (error, result) {
         console.log(result);
});
    },
});


Template.trials.onRendered( function(){
     exportType = "followed-by?";
     userPicked = Meteor.user().services.instagram.id;




});




