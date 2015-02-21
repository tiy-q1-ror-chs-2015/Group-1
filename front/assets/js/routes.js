//ROUTES
///LogIN
////home (all contacts), add contact, edit contact
var AppRouter = Backbone.Router.extend({
  initialize: function() {
  },
  routes: {
    '': 'home',
    'searchResults': 'searchResultsRoute'
  },
  home: function(){
    var contactsCollection = new ContactsCollection();
    contactsCollection.fetch().then(function(){
      var contactsView = new ContactsView({collection: contactsCollection});
    });
    var addContacts = new AddContactView();
  },
  searchResultsRoute: function(){
    //
    //var searchResults = new SearchResultsView();
  }
  // loadView:function(view){
  //   this.view = view;
  // }
});
