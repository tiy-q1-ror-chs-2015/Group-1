//Main app script
var App = {};     //Global App variable for use w/ routes

//Run the app once the DOM loads
$(document).ready(function(){
  //ROUTER STUFF

  App.router = new AppRouter();
  Backbone.history.start();

  $('.app-container').on('click', '.addcontact-but', function(e){
    e.preventDefault();
    console.log('add button clicked');
    $('section.addcontact-view').toggleClass('off-right');
    $('.addcontact-but i').toggleClass('fa-plus');
    $('div.addcontact-button-wrapper').toggleClass('spin');
    $('div.addcontact-button-wrapper').toggleClass('flush');
    $('.addcontact-but i').toggleClass('fa-minus');

  });


  $('.navigation-wrapper').on('click', '.ua', function(e){
    e.preventDefault();
    console.log('ua link clicked');
    App.router.navigate('userAuth', true);
  });

  $('.navigation-wrapper').on('click', '.logo', function(e){
    e.preventDefault();
    console.log('home link clicked');
    App.router.navigate('home',true);
  });


});
