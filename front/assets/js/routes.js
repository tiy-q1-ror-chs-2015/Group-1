//ROUTES
///LogIN
////home (all contacts), add contact, edit contact
var AppRouter = Backbone.Router.extend({
  initialize: function() {
  },
  routes: {
    '': 'home'
  },
  home: function(){
    this.loadView(new AddContactView());
  },
  loadView:function(view){
    this.view = view;
  }
});
