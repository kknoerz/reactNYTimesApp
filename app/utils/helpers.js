// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var authKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";

function getArticles(queryTerm){
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey+"&q="+queryTerm);
};

var helpers = {
	getAllArticles: function(queryTerm){
		return axios.all([getArticles(queryTerm)])
			.then(function(arr){
				return {

				queryResults: arr[0].data.response.docs
			}
		});
	},

	save: function(title, url){
		// debugger;
		var encodedUrl = encodeURIComponent(url);
		var saved = '/save/' + title + '/' + encodedUrl;
		axios.post(saved)
		.then(function(res){
			return res
		}).catch(function(error){
			console.log(error);
		});
	},

	getSaved: function(func){
		debugger;
		axios.post('/saved').then(function(res){
			debugger;
			func(res)
			return res
		}).catch(function(error){
			console.log(error);
		});
	}
}

module.exports = helpers;
