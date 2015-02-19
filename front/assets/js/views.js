//VIEWS


//Contact - single contact view
///Render, edit, delete a single contact
var ContactView = Backbone.View.extend({
  template: _.template(templates.contact),
  tagName: 'article'
  initialize: function(){
    console.log('contact created!');
  }
});


//Contacts
////Render -- add one contact, add all contacts


//Add Contact
////Submit the contact, render
