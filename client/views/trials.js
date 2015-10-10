Template.trials.helpers({
    returnSearchedUsers:function(){
        return InstagramSearchedUsers.find();
    },

});

Template.trials.events({
    'click #searchIgUser': function() {
        instagramUser = $(".form-control").val();
        getIgUserId = Meteor.call("getIgUserId", instagramUser,  function (error, result) {
    InstagramSearchedUsers.insert(result);
});

    },

});