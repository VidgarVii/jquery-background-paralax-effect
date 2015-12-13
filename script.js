// Paralax effect - Background moves down when scrolling
var moveBg = function(el) {
	var wHeight = $(window).height();  // Window height
	var elTop = $(el).offset().top;  // Element's top position in page ( Distance from top of page to element's top line ) 
	var elHeight = $(el).innerHeight();  // Element height
	var elReachBottom = elTop - wHeight; // Position of scroll when element appear in page from bottom
	var elReachTop = elTop + elHeight;  // Element's bottom position in page ( Distance from top of the page to element's bottom line )
	var i = 20; // Decrease scroll by variable

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();  // Window top scroll position
		var moveDistance = ( wScroll - elReachBottom )/i; // Distance to move background down
		if (( wScroll > elReachBottom ) && ( wScroll < elReachTop )) {  // Verify if element is in viewport or is out
			$(el).css({"background-position-y":moveDistance, "background-attachment":"fixed"});
		}
	});
}; 
moveBg(".class");