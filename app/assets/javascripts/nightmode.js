$(document).on('turbolinks:load', function(){
  var button = $('.night-mode-button');
  var container = $('.content');
  
  button.click(function() {
    container.toggleClass('-nightmode');      
  });
});

