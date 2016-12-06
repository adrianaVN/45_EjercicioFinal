$(document).ready(function(){
	console.log("el documento esta listo")
	$(".icon-menu").hide();
	
	$('.js-show-recipe').click(function(){
		 $('.page').removeClass("make");
		 $(this).addClass("active");
		 $('.js-show-make').removeClass("active");

	});
	$('.js-show-make').click(function(){
		 $('.page').addClass("make");
		 $(this).addClass("active");
		 $('.js-show-recipe').removeClass("active");

	});

});
