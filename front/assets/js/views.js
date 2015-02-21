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
    e.preventDefault();
    this.$('.editForm-wrapper').toggleClass('show');
  },
  submitEdit: function(e){
    console.log('edit submitted');
    e.preventDefault();
    var myEl = this.$el.find('#editForm');

    var editedContact = {
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
    this.model.set(editedContact);
    this.model.save();
    this.render();
    this.$('.editForm-wrapper').toggleClass('show');
  },
  render:function(){
    var compiled = this.template(this.model.attributes);
    this.$el.html(compiled)
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
  tagName: 'section',
  className: 'addcontact-view',
  template: _.template(templates.addContact),
  initialize:function(){
    console.log('add contact view initialized');
    this.render();
    $('.app-container').append(this.el);
    $('section.addcontact-view').addClass('off-right');
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
    this.model = new Contact(newContact);
    this.model.save();
    this.collection.add(newContact);
    this.$el.add();
  }
});


//Contacts
////Render -- add one contact, add all contacts
var ContactsView = Backbone.View.extend({
  tagName: 'section',
  className: 'allcontacts-view',
  initialize: function(){
    console.log('contacts view init');
    this.render();
    $('.app-container').append(this.el);
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
    this.$el.append(contactView.render().el);
  },
  addAll: function(){
    _.each(this.collection.models, this.addOne, this);
  }
});
