//VIEWS

//MODEL VIEW
//Contact - single contact view
///Render, edit, delete a single contact
var ContactView = Backbone.View.extend({
  template: _.template(templates.contact),
  tagName: 'article',
  initialize: function(){
    console.log('contact created!');
  },
  events: {
    //Edit
    ////Show
    "click .showEdit": "showEdit",
    ////Submit
    "click .submitEdit": "submitEdit",

    //Delete
    "click .deleteContact": "deleteContact"

  },
  showEdit: function(e){
    console.log('showing the view form');
    e.preventDefault();

    this.$('#editContact').toggleClass('show');
  },
  submitEdit: function(e){
    console.log('edit submitted');
    e.preventDefault();
    var myEl = this.$el.find('#editContact');

    // var editedContact = {
    //   name: ,
    //   street: ,
    //   street_2: ,
    //   city: ,
    //   state: ,
    //   zip: ,
    //   email: ,
    //   github: ,
    //   twitter: ,
    //   photo: ,
    //   number: ,
    //   user_id: ,
    // };

    this.model.set(editedContact);
    this.model.save();
    this.render();
  },
  render:function(){
    var compiled = this.template(this.model.attributes);
    this.$el.html(markup)
    return this;
  },
  deleteContact:function(){
    //DELETE
    this.model.destroy();
    this.$el.remove();
  }
});


//Add Contact
////Submit the contact, render
var AddContactView = Backbone.View.extend({
  tagName: 'article',
  template: _.template(templates.addContact),
  initialize:function(){
    console.log('add contact view initialized');
    this.render();
    $('.addcontact-view').append(this.el);
  },
  events: {
    'submit #addContactForm' : 'submitContact'
  },
  render: function(){
    console.log('rendering add-contact view');
    this.$el.html(this.template({data: 'something'}));
    return this;
  },
  submitContact: function(e){
    e.preventDefault();
    console.log('contact submitted');
    var myEl = this.$el.find('#addContactForm');
    var newContact = {
      name:     myEl.find('input[name="name"]').val(),
      street:   myEl.find('input[name="street"]').val(),
      street_2: myEl.find('input[name="street_2"]').val(),
      city:     myEl.find('input[name="city"]').val(),
      state:    myEl.find('input[name="state"]').val() ,
      zip:      myEl.find('input[name="zip"]').val(),
      email:    myEl.find('input[name="email"]').val(),
      github:   myEl.find('input[name="github"]').val(),
      twitter:  myEl.find('input[name="twitter"]').val(),
      photo:    myEl.find('input[name="photo"]').val(),
      number:   myEl.find('input[name="number"]').val(),
    };
    console.log(newContact);
    this.model = new Contact(newContact);
    this.model.save();
  }
});


//Contacts
////Render -- add one contact, add all contacts
var ContactsView = Backbone.View.extend({
  tagName: 'section',
  initialize: function(){
    console.log('contacts view init');
    this.render();
    $('.contacts-container').append(this.el);
  },
  events: {
    "click #createContact": "createContact"
  },
  render: function(){
    this.addAll();
    return this;
  },
  addOne: function(contactModel){
    var contactView = new ContactView({model: contactModel});
    this.$el.append(ContactView.render().el);
  },
  addAll: function(){
    _.each(this.collection.models, this.addOne, this);
  }
});
