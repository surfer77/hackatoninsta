Template.trials.helpers({
    returnSearchedUsers:function(){
        return InstagramSearchedUsers.find();
    },

    currentUsername:function(){
        return Meteor.user().services.instagram.username;
    },

});

Template.trials.events({
    'click #searchIgUser': function() {
        instagramUser = $(".form-control").val();
        getIgUserId = Meteor.call("getIgUserId", instagramUser,  function (error, result) {
         var string = JSON.stringify(result);
         console.log(string);
});

    },

    "change #otherUser": function(){
                        $('#myModal').modal({
                        show: 'false'
                    });
    },

/*
    'click #ads': function() {
        getInstagramData = Meteor.call("getInstagramData",  function (error, result) {
    userFollows.insert(result);
});
*/

});