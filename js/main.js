$(document).ready(function(){
 $("#owl_demo_three").owlCarousel({
 
autoPlay: 3000, //Set AutoPlay to 3 seconds
 pagination: false,
 navigation: true,
items : 3,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
 
mouseDrag : false,
touchDrag : false,
dragBeforeAnimFinish : false,
 
});


	
 $("#coursel_text").owlCarousel({
 autoPlay: 3000, //Set AutoPlay to 3 seconds
navigation : false, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true
 
// "singleItem:true" is a shortcut for:
// items : 1,
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false
 
});


	 $("html").niceScroll({
	  cursorcolor:"#DA334B",
	  cursorwidth:"12px",
	  cursorborder:"none",
	  cursorborderradius:"none",
	  autohidemode:"false",	
	  zindex :99999,
	  scrollspeed: 80,
	  cursorminheight: 200,		  			  
	})






	
});




