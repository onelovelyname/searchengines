var googleSearch = require('../utility/googleSearch.js');
var yahooSearch = require('../utility/yahooSearch.js');
var bingSearch = require('../utility/bingSearch.js');

module.exports = {

  searchEngines: function(request, response) {

    var query = request.body.query;
    console.log("query: ", query);

    Promise.all([googleSearch(query), bingSearch(query)]).then(function(results){
      console.log("results:", results);
    });

    // googleSearch(query).then(function(results) {
    //   console.log("results from Google in searchEngines: ", results);
    // });

    // Promise.all([googleSearch.search(query), yahooSearch.search(query), bingSearch(query)]).then(function(results){
    //   console.log("search results from searchEngines: ", results);
    // })
    // .catch(function(error) {
    //   console.log("error in searchEngines: ", error);
    // });

  }

};
