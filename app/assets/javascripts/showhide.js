$(document).on('turbolinks:load', function() {
      var button = $('.button1');
      var button2 = $('.button2')
      //var container = $('.tohide');
     // container.toggleClass('-tohide').toggle();

      $(button).click(function() {
          $(".tohide, .hiddenthing").toggleClass('hiddenthing');
        });
        $(button2).click(function() {
	  $(".tohide").toggleClass('hiddenthing');
        });
      });
