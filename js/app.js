/*
  Please add all Javascript code to this file.
*/

// $(function() {

// 	var source = $("#hello-world-template").html();
// 	var template = Handlebars.compile(source);

// 	var helloStatement = {
//   		title: "My New Post", 
//   		body: "This is my first post!"
// 	};
// 	var compiledTemplate = template(helloStatement);
// 	$('body').append(compiledTemplate);
// });

'use strict';
(function() {

// 	$.ajax({
//        'type': 'GET',
//     'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
//     data: {
//         'response-format': "json",
//         'api-key': 'fd3780697c5e601fb2a582424a554b69:19:73730023',
//         'callback': 'svc_search_v2_articlesearch'
//     },
//     success: function(response) {
//         // passed function object for data processing 
//         console.log(response.docs.headline);
//     }
//     //  success: function(response) {
//     //     // passed function object for data processing 
//     //     console.log(response.docs[0].headline.main);
//     // }
// });

	var redditURL = "https://www.reddit.com/top.json";
  	
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

				};
				var compiledTemplate = template(articleData);
				$('#main').append(compiledTemplate);
				$('#popUp').addClass('hidden');
				console.log(response.data.children[0].data);
			});

			$(document).on( "click", ".articleContent a", function() {
 				$('#popUp').removeClass('hidden');
 				 $('#popUp').removeClass('loader');

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
