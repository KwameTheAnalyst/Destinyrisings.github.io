
  (function($) {
	var $window = $(window),
	  $body = $('body'),
	  $nav = $('#nav'),
	  $menuButton = $('#menu-button');
  
	// Toggle the menu when the menu button is clicked
	$menuButton.on('click', function(event) {
	  event.preventDefault();
	  $body.toggleClass('navPanel-visible');
	});
  
	// Rest of the JavaScript code...
  })(jQuery);
  