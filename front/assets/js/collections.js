//Collection - a collection of a user's contacts
var ContactsCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/users/1/contacts',
  initialize: function(){
    console.log('contact collection initialized');
  }
});
