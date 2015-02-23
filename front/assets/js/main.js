//Main app script
var App = {};     //Global App variable for use w/ routes

//Run the app once the DOM loads
$(document).ready(function(){
  //ROUTER STUFF

  App.router = new AppRouter();
  Backbone.history.start();

  //MOVING THROUGH ROUTES
  $('.navigation-wrapper').on('click', '.logo', function(e){
    e.preventDefault();
    App.router.navigate('splash',true);
  });
  $('.navigation-wrapper').on('click', '.home', function(e){
    e.preventDefault();
    App.router.navigate('userHome',true);
  });


  //LOGOUT
  $('.navigation-wrapper').on('click', '#logout', function(e){
    console.log('user logged out');
    localStorage.removeItem("user");
    App.router.navigate('splash', true);
  })
});
