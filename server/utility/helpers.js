module.exports = (function() {

  var formatResults = function(resultsObj) {
    
    console.log("resultsObj in formatResults: ", resultsObj);

    var formattedResults = [];

    // results is an array containing results from Google, Yahoo, and Bing
    // results[0] = google results

    for (var key in resultsObj) {

      if (resultsObj[key]) {

        for (var i = 0; i < resultsObj[key].length; i++) {

          var result = {

            title: resultsObj[key][i].title,
            formattedUrl: resultsObj[key][i].formattedUrl,
            picture: resultsObj[key][i].pagemap.cse_image[0].src || null,
            source: key

          };

          formattedResults.push(result);

        }

      }

    }

    console.log("formattedResults: ", formattedResults);
    
    return formattedResults;

  };

  return {

    formatResults: formatResults

  };
})();
