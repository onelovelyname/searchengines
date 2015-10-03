var request = require('request');

module.exports = function(query) {

  var endpoint = "https://api.datamarket.azure.com/Bing/Search/Web?$format=json";
  var key =  "khnUjksHG4vgukHIKuM5mG+6Ici23IaoDgbULJHAA5U=";
  var q = "&Query=" + query;

  return new Promise(function(resolve, reject) {

    var options = {
      url: endpoint + q,
      headers: {
        "Authorization": "Basic " + "OmtlbzZaUmV4VDNySDlFUHZZaWV4V3NkRkJ2em95c2Fya2RaTEMzUUliSmM="
      }
    };

    request(options, function(error, response, body) {
      console.log("response: ", response);
      if (!error && response.statusCode === 200) {
        console.log("body: ", body);
        resolve(body);
      }

    });

  });

};
