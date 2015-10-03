var request = require('request');

module.exports = function(query) {

  var endpoint = "https://www.googleapis.com/customsearch/v1?";
  var key = "key=AIzaSyDeGAreA1XhexG2pixwPZS-TGu8qVUOf_s";
  var engine = "&cx=009704563390923643290:fnb4nzxy_7u";
  var q = "&q=" + query;

  var totalQuery = endpoint + key + engine + q;

  return new Promise(function(resolve, reject) {

    request(totalQuery, function(error, response, body) {

      if (!error && response.statusCode === 200) {
        resolve(JSON.parse(body).items);
      }

    });

  });

};
