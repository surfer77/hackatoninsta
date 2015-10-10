InstagramSearchedUsers = new Mongo.Collection(null);

Projects = new Meteor.Collection('projects');




Projects.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },

  remove: function(ownerId, doc) {
    return !! ownerId;
    },
     update: function(ownerId, doc) {
    return !! ownerId;
    },
});


project = Projects.find(this._id);
