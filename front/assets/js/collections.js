//Collection - a collection of a user's contacts
var userObj = $.parseJSON(localStorage.user);

var ContactsCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/users/' + userObj.id + '/contacts',
  initialize: function(){
    console.log('contact collection initialized');
    console.log(this.url);
  }
});
