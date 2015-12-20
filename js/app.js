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
		console.log(title);
		console.log(url);
		$('#popUp .container h1').replaceWith('<h1>' + title + '</h1>');
		$('#popUp .container .popUpAction').attr('href', url);
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
	  				url: 'https://www.reddit.com' + this.data.permalink

				};
				var compiledTemplate = template(articleData);
				$('#main').append(compiledTemplate);
				$('#popUp').addClass('hidden');
				console.log(response.data.children[0].data);
			});




			// var source = $("#hello-world-template").html();
			// var template = Handlebars.compile(source);

			// var helloStatement = {
  	// 			title: response.data.children[0].data.title, 
  	// 			thumbnail: response.data.children[0].data.thumbnail
			// };
			// var compiledTemplate = template(helloStatement);
			// $('.article').eq(0).find('h3').replaceWith(compiledTemplate);
			// $('.article').eq(0).find('.featuredImage img').replaceWith(compiledTemplate);
			// var helloStatementTwo = {
  	// 			title: response.data.children[1].data.title, 
  	// 			body: "This is my first post!"
			// };
			// var compiledTemplateTwo = template(helloStatementTwo);
			// $('.article').eq(1).find('h3').replaceWith(compiledTemplateTwo);
			// var helloStatementThree = {
  	// 			title: response.data.children[2].data.title, 
  	// 			body: "This is my first post!"
			// };
			// var compiledTemplateThree = template(helloStatementThree);
			// $('.article').eq(2).find('h3').replaceWith(compiledTemplateThree);
			// var helloStatementFour = {
  	// 			title: response.data.children[3].data.title, 
  	// 			body: "This is my first post!"
			// };
			// var compiledTemplateFour = template(helloStatementFour);
			// $('.article').eq(3).find('h3').replaceWith(compiledTemplateFour);
			// $('#popUp').addClass('hidden');
			// $('#popUp').addClass('hidden');
			// for (var i = 0; i < 25; i++) {
			// 	console.log(response.data.children[i].data);
			// 	$('body').append(response.data.children[i].data);
			// }
		}  	
	});
})();
