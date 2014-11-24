$(document).ready(function(){
	$('ul.search_description').append('<li><button id="hack" type="button" style="float: right;">Hack It</button></li>');
	$('button#hack').on("click", function(){
		hack();
	});
});

function hack(){
	$('div#header').html( "<div><img src='http://img.izismile.com/img/img3/20100928/1000/funny_gif_collection_01.gif'></div>" );
}