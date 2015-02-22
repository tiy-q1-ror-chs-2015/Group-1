//ROUTES
///LogIN
////home (all contacts), add contact, edit contact
var AppRouter = Backbone.Router.extend({
  initialize: function() {
  },
  routes: {
    '' : 'home',
    'home': 'home',
    'searchResults': 'searchResultsRoute',
    'userAuth': 'userAuthRoute'
  },
  home: function(){
    var contactsCollection = new ContactsCollection();
    contactsCollection.fetch().then(function(){
      var contactsView = new ContactsView({collection: contactsCollection});
    });
    var addContacts = new AddContactView();
  },
  searchResultsRoute: function(){
    //var searchResults = new SearchResultsView();
  },
  // userAuthRoute:function(){
  //   var userAuth = new AuthView();
  //   this.loadView(userAuth);
  //   console.log('authentication view route running');
  // },
  loadView:function(view){
    this.view && this.view.remove();
    this.view = view;
  }
});
