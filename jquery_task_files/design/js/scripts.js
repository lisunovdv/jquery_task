$(function() {
	var $menu = $("header");
	$(window).scroll(function(){
	    if ( $(this).scrollTop() > 50 && $menu.hasClass("default") ){
	        $menu.removeClass("default").addClass("fixed");
	    } else if($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
	        $menu.removeClass("fixed").addClass("default");
	    }
	});//scroll
});