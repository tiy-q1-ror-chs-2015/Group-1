//Collection - a collection of a user's contacts
var ContactCollection = Backbone.Collection.extend({
  url: 'http//localhost:9000/students/users/1/',
  initialize: function(){
    console.log('contact collection initialized');
  }
});
