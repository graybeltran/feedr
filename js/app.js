/*
  Please add all Javascript code to this file.
*/

'use strict';
(function() {


	var redditURL = "https://www.reddit.com/top.json";

	$(document).on( "click", ".articleContent", function() {
 		$('#popUp').removeClass('hidden');
 		$('#popUp').removeClass('loader');
		var title = $(this).find('h3').html();
		var url = $(this).find('#url').html();
		var domain = $(this).find('#domain').html();
		console.log(title);
		console.log(url);
		$('#popUp .container h1').replaceWith('<h1>' + title + '</h1>');
		$('#popUp .container .popUpAction').attr('href', url);
		$('#popUp .container p').replaceWith('<p>' + domain + '</p>');

	});

	$('.closePopUp').on( "click", function() {
 		$('#popUp').addClass('hidden');
	});
  	
  	$.ajax({
		url: redditURL,
		data: {
			format: 'json'
		},
		success: function(response) {
			var source = $("#article-template").html();
			var template = Handlebars.compile(source);

			$(response.data.children).each(function() {
				var articleData = {
	  				title: this.data.title, 
	  				thumbnail: this.data.thumbnail,
	  				impressions: this.data.ups,
	  				author: this.data.author,
	  				url: 'https://www.reddit.com' + this.data.permalink,
	  				domain: this.data.domain
				};
				var compiledTemplate = template(articleData);
				$('#main').append(compiledTemplate);
				$('#popUp').addClass('hidden');
				console.log(response.data.children[0].data);
			});
		}	
	});
})();
