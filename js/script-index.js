$(document).ready( function(){

	$(".icon-arrow-left-alt").hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	
	
	function printNews(){
		var noticias = $('#noticias');

		noticias.append("Nuevas recetas");
		console.log(noticias);
	}

	printNews();
	renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	
	var receta = _.where(recipesArray, {highlighted: true});
	_.each(receta, renderRecipe);
	
	


};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	/*var liga = $('<a></a>');
		liga.addClass("item-recipe");

	var span1 = $('<span></span>');
		span1.addClass("attribution");

	var span2 = $('<span></span>');
		span2.addClass("title-recipe");
		span2.text(recipe.title);

	var span3 = $('<span></span>');
		span3.addClass("metadata-recipe");

	var span4 = $('<span></span>');
		span4.addClass("author-recipe");
		span4.text(recipe.source.name);

	var span5 = $('<span></span>');
		span5.addClass("bookmarks-recipe");

	var span6 = $('<span></span>');
		span6.addClass("icon-bookmark");

	var img =$('</img>');
		img.attr('src',recipe.source.url);

	liga.append(span1);
	span1.append(span2);
	span1.append(span3);
	span3.append(span4);
	span3.append(span5);
	span5.append(span6);
	liga.append(img);

	console.log(liga);

	$(".list-recipes").append(liga);*/
	var a = $('<a></a>');
	a.addClass('item-recipe');

	var spanP = $('<span><span/>');
	spanP.addClass("attribution");

	var spanH1 = $('<span><span/>');
	spanH1.addClass("title-recipe");
	spanH1.text(recipe.title);

	var spanH2 = $('<span><span/>');
	spanH2.addClass("metadata-recipe");

	var spanN1 = $('<span><span/>');
	spanN1.addClass("author-recipe");
	spanN1.text(recipe.source.name);

	var spanN2 = $('<span><span/>');
	spanN2.addClass("bookmarks-recipe");
	
	var spanBis = $('<span></span>');
	spanBis.addClass("icon-bookmark");

	var img = $('<img/>');
	img.attr('src',"img/recipes/320x350/" + recipe.name+ ".jpg" );


	
	a.append(spanP);
	spanP.append(spanH1);
	spanP.append(spanH2);
	spanH2.append(spanN1);
	spanP.append(spanN2);
	spanN2.append(spanBis);
	a.append(img);

	console.log(a);
	$('.list-recipes').append(a);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	_.each(activitiesArray, renderActivity);
	$(".wrapper-message").hide();

	

		

	
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {
	
	var template =
	'<a  href="#" class="item-activity">' +
		'<span class="attribution">'+
			'<span class="avatar">'+
				'<img  src="<%=activity.userAvatar %>" class="image-avatar">'+
			'</span>'+
			'<span class="meta">'+
		      '<span class="author"> <%=activity.userName %></span>'+
		      '<span class="recipe"> <%=activity.recipeName %></span>'+
		      '<span class="location"&mdash<%=activity.place%></span>'+
    		'</span>'+
		'</span>'+
		' <div class="bg-image" style="background-image: url(&quot;<%=activity.image %>&quot;)"></div>'+
	'</a>';	

	var compiled = _.template(template);
	var a = compiled ({activity:activity});
	console.log(a);

	var elemento = $(a);
	$('.list-activities').append(a);
}


