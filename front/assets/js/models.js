//Contact - single contact model
var Contact = Backbone.Model.extend({
  url: 'http://localhost:9000/users/1/contacts',
  defaults:function(){
    name: 'John Doe'
  },
  initialize: function(){
    console.log('contact has been initialized');
  },
  toJSON: function(){
    return{contact: this.attributes};
  }
});
