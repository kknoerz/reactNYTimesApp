// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var authKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";

function getArticles(queryTerm, startYear, endYear){
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey+"&q="+queryTerm+'&begin_date='+startYear+'0101&end_date='+endYear+'0101');

}

var helpers = {
	getAllArticles: function(queryTerm, startYear, endYear){
		
		return axios.all([getArticles(queryTerm, startYear, endYear)])
			.then(function(arr){
				debugger;
				return {

				queryResults: arr[0].data.response.docs
			}
		});
	},

	save: function(title, url, pub){
		// 
		var encodedUrl = encodeURIComponent(url);
		var saved = '/save/' + title + '/' + encodedUrl + '/' + pub;
		debugger;
		return axios.post(saved)
		.then(function(res){
			debugger;
			return res
		}).catch(function(error){
			console.log(error);
		});
	},

	getSaved: function(func){
		
		return axios.post('/saved').then(function(res){
			
			func(res)
			return res
		}).catch(function(error){
			console.log(error);
		});
	},

	remove: function(id){
		
		var remove = '/remove/' + id;
		return axios.post(remove).then(function(res){
			
			return res
		}).catch(function(error){
			console.log(error);
		});
	}
}

module.exports = helpers;
