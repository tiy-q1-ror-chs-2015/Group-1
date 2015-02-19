//Main app script
var App = {};     //Global App variable for use w/ routes


//Run the app once the DOM loads
$(document).ready(function(){
  //ROUTER STUFF
  App.router = new AppRouter();
  Backbone.history.start();
});
