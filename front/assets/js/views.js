//VIEWS

// User Authentication View
// var AuthView = Backbone.View.extend({
//   tagName: 'section',
//   template: _.template(templates.auth),
//   initialize: function(){
//     console.log('Authentication View Initialized');
//     this.render();
//   },
//   events: {
//     //login button events go here
//   },
//   render:function(){
//     console.log('rendering the user auth template');
//     //renders the auth page
//     var compiled = this.template({data: 'something'}); //data is not important. we are rendering static template
//     console.log(compiled);
//     $('.app-container').append(compiled);
//     return this;
//   }
// });

//Add Contact
////Submit the contact, render
// var AddContactView = Backbone.View.extend({
//   tagName: 'section',
//   className: 'addcontact-view',
//   template: _.template(templates.addContact),
//   initialize:function(){
//     this.render();
//     $('.app-container').append(this.el);
//     $('section.addcontact-view').addClass('off-right');
//   },
//   events: {
//     'submit #addContactForm' : 'submitContact'
//   },
//   render: function(){
//     this.$el.html(this.template({data: 'something'}));
//     return this;
//   },
//   submitContact: function(e){
//     e.preventDefault();
//     var myEl = this.$el.find('#addContactForm');
//     var newContact = {
//       name:     myEl.find('input[name="name"]').val(),
//       street:   myEl.find('input[name="street"]').val(),
//       street_2: myEl.find('input[name="street_2"]').val(),
//       city:     myEl.find('input[name="city"]').val(),
//       state:    myEl.find('input[name="state"]').val() ,
//       zip:      myEl.find('input[name="zip"]').val(),
//       email:    myEl.find('input[name="email"]').val(),
//       github:   myEl.find('input[name="github"]').val(),
//       twitter:  myEl.find('input[name="twitter"]').val(),
//       photo:    myEl.find('input[name="photo"]').val(),
//       number:   myEl.find('input[name="number"]').val(),
//       note: "",
//       ip: myip
//     };
//     console.log(myip);
//     this.model = new Contact(newContact);
//     this.model.save();
//     this.model.renderAddedContact();
//   }
// });


//MODEL VIEW
//Contact - single contact view
///Render, edit, delete a single contact
var ContactView = Backbone.View.extend({
  template: _.template(templates.contact),
  tagName: 'article',
  className: 'contact',
  initialize: function(){
    console.log('contact created!');
  },
  events: {
    //Edit
    ////Show
    "click .showEdit": "showEdit",
    ////Submit
    "click .submitEdit": "submitEdit",
    ////Delete
    "click .deleteContact": "deleteContact",

    ////FlipCard

  },
  showEdit: function(e){
    e.preventDefault();
    console.log('show edit form');
    // this.$('.editForm-wrapper').toggleClass('show');
    this.$el.find('.flipper').toggleClass('flipped');
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
      note: myEl.find('textarea[name="note"]').val(),
      ip: String(myip)
    };
    this.model.set(editedContact);
    this.model.save();
    this.$el.find('.flipper').removeClass('flipped');
    this.render();
  },
  render:function(){
    var compiled = this.template(this.model.attributes);
    this.$el.html(compiled);
    return this;
  },
  deleteContact:function(){
    //DELETE
    this.model.destroy();
    this.$el.remove();
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
    this.addMenu();
    $('.app-container').append(this.el);
  },
  events: {
    'click .js-menu-trigger': 'showCreateContact',
    'click .js-menu-screen' : 'hideMenuScreen',
    'click #createContact':'createContact'
  },
  render: function(){
    this.addAll();
    return this;
  },
  addMenu:function(){
    var compiled = _.template(templates.addContactMenu);
    this.$el.append(compiled({data:'something'}));
  },
  addOne: function(contactModel){
    var contactView = new ContactView({model: contactModel});
    this.$el.append(contactView.render().el);
  },
  addAll: function(){
    _.each(this.collection.models, this.addOne, this);
  },
  showCreateContact:function(e){
    e.preventDefault();
    $('.js-menu,.js-menu-screen').toggleClass('is-visible');
  },
  hideMenuScreen:function(e){
    e.preventDefault();
    $('.js-menu,.js-menu-screen').toggleClass('is-visible');
  },
  createContact: function(e){
    console.log('new contact submitted');
    e.preventDefault();
    var myEl = this.$el.find('#addContactForm');
    var newContact = {
      name:     myEl.find('input[name="name"]').val(),
      street:   myEl.find('input[name="street"]').val(),
      street_2: myEl.find('input[name="street_2"]').val(),
      city:     myEl.find('input[name="city"]').val(),
      state:    myEl.find('input[name="state"]').val(),
      zip:      myEl.find('input[name="zip"]').val(),
      email:    myEl.find('input[name="email"]').val(),
      github:   myEl.find('input[name="github"]').val(),
      twitter:  myEl.find('input[name="twitter"]').val(),
      photo:    myEl.find('input[name="photo"]').val(),
      number:   myEl.find('input[name="number"]').val(),
      note: myEl.find('textarea[name="note"]').val(),
      ip: String(myip)
    };
    myEl.find('input').val("");
    $('.js-menu,.js-menu-screen').toggleClass('is-visible');
    $('.addcontact-button-wrapper').removeClass('flush');
    this.model = new Contact(newContact);
    this.model.save();
    this.addOne(this.model);
  },
});

//Splash
////First view the user sees
var SplashView = Backbone.View.extend({
  tagName: 'section',
  className: 'splash-view',
  initialize: function(){
    this.render();
    $('.app-container').append(this.el);
  },
  events: {
    //events to move on to next route(view)
    "click #login" : "login"
  },
  checkUser: function(ip){
    //checks the usersIP
    ////Displays welcome message if it recognizes
    ////Gives instructions if it doesnt recognize
  },
  render:function(){
    var markup = _.template(templates.splash);
    this.$el.append(markup({data:"something"}));
    return this;
  },
  login: function(e){
    e.preventDefault();
    var username = this.$el.find('input').val();
    if(username=""){
      alert('you must enter a username to continue');
    }
    else{
      localStorage.user = username;
      App.router.navigate('userHome',true);
    }
  }
});
