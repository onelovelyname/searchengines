var googleSearch = require('../utility/googleSearch.js');
var yahooSearch = require('../utility/yahooSearch.js');
var bingSearch = require('../utility/bingSearch.js');
var helpers = require('../utility/helpers.js');

module.exports = {

  searchEngines: function(request, response) {

    var query = request.body.query;
    console.log("query: ", query);

    var yahooResults = [
    {
      title: "Bear - Wikipedia, the free encyclopedia",
      formattedUrl: "en.wikipedia.org/wiki/Bear",
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ursus_arctos_-_Norway.jpg/200px-Ursus_arctos_-_Norway.jpg",
      source: "Yahoo"
    },
    {
      title: "bear. {restaurant}",
      formattedUrl: "http://bearnyc.com/",
      picture: "http://bearnyc.com/images2/april10/006.jpg",
      source: "Yahoo"
    }
    ];

    var bingResults = [{
      title: "Bear | Definition of bear by Merriam-Webster",
      formattedUrl: "www.merriam-webster.com/dictionary/bear",
      picture: "http://assets.merriam-webster.com/mwol/images/mwlogo_130x130_white_reg-6739a.gif",
      source: "Bing"
    }, {
      title: "Bear - Astoria - Long Island City, NY - Yelp",
      formattedUrl: "www.yelp.com/biz/bear-long-island-city",
      picture: "http://s3-media2.fl.yelpcdn.com/bphoto/q3-JcMw883FqqIPKyJYjnQ/o.jpg",
      source: "Bing"
    }];

    Promise.all([googleSearch(query),
      // bingSearch(query),
      // yahooSearch(query)
      ]).then(function(results){

        var resultsObj = {
          google: results[0] || [],
          bing: results[1] || [],
          yahoo: results[2] || []
        };

        var formattedResults = helpers.formatResults(resultsObj);

        formattedResults = formattedResults.concat(yahooResults, bingResults);

        response.send(formattedResults);
        
      });

  }

};
