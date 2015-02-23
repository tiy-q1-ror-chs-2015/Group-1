//Contact - single contact model
var userObj = $.parseJSON(localStorage.user);

var Contact = Backbone.Model.extend({
  url: 'http://localhost:9000/users/' + userObj.id + '/contacts',
  defaults:function(){
    name: 'John Doe'
  },
  initialize: function(){
    console.log('contact has been initialized');
    console.log(this.url);
  },
  toJSON: function(){
    return{contact: this.attributes};
  }
});
