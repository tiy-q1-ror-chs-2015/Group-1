//Collection - a collection of a user's contacts
var ContactsCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/contacts',
  initialize: function(){
    console.log('contact collection initialized');
  }
});
