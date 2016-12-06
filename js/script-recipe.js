$(document).ready(function(){
	console.log("el documento esta listo")
	$(".icon-menu").hide();
	
	$('.js-show-recipe').click(function(){
		 $('.page').removeClass("make");

	})
	$('.js-show-make').click(function(){
		 $('.page').addClass("make");

	})
});
