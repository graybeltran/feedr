/*
  Please add all Javascript code to this file.
*/

'use strict';
(function() {

  var redditURL = "https://www.reddit.com/top.json";
  	$.ajax({
		url: redditURL,
		data: {
			format: 'json'
		},
		success: function(response) {
			for (var i = 0; i < 5; i++) {
				console.log(response.data.children[i].data.title);
			}
		}  	
	});

})();