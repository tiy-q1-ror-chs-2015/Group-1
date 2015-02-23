var AppRouter = Backbone.Router.extend({
  initialize: function() {
  },
  routes: {
    '' : 'splashRoute',
    'splash' : 'splashRoute',
    'userHome': 'userHomeRoute',
    // 'searchResults': 'searchResultsRoute',
    // 'userAuth': 'userAuthRoute'
  },
  userHomeRoute: function(){
    var self = this;
    var contactsCollection = new ContactsCollection();
    contactsCollection.fetch().then(function(){
      var contactsView = new ContactsView({collection: contactsCollection});
      self.loadView(contactsView);
    });
    $('div.background-image').css('display', 'none');
  },
  // searchResultsRoute: function(){
  //   //var searchResults = new SearchResultsView();
  // },
  // userAuthRoute:function(){
  //   var userAuth = new AuthView();
  //   this.loadView(userAuth);
  //   console.log('authentication view route running');
  // },
  splashRoute:function(){
    var self = this;
    var splashView = new SplashView;
    $('div.background-image').css('display', 'block');
    self.loadView(splashView);
  },
  loadView:function(view){
    this.view && this.view.remove();
    this.view = view;
  }
});
