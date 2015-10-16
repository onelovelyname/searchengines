$(function() {
    
  var makeResultRows = function(results, page) {

    var start = page * 10 - 10;
    var resultsRows = "";

    for (var i = start; i < (start + 10); i++) {
      resultsRows += ("<tr><td><img src=" + results[i].picture + " alt='picture' class='result-picture'></td><td>" + results[i].title + "</td><td><a href='http://" + results[i].formattedUrl + "' target='_blank'>" + results[i].formattedUrl + "</a></td><td>" + results[i].source + "</td></tr>");
    }

    return resultsRows;

  };
    
  var storage = [];

  $("#search-form").submit(function(event) {

    event.preventDefault();

    var query = $("#search-query").val();

    $.ajax({
      type: "POST",
      url: 'api/search',
      data: {query: query},
      success: function(results) {

        //console.log("results from server: ", results);
        storage = results;

        // clear out input field
        $("#search-query").val("");

        // create table for results
        $("#results").html("<h2>Results</h2><table class='table table-hover'><thead><th>Picture</th><th>Title</th><th>URL</th><th>Source</th></thead><tbody></tbody></table>");

        // create buttons for pagination
        var buttonNum = Math.ceil(results.length / 10);
        var buttonStr = "";

        for (var i = 0; i < buttonNum; i++) {
          buttonStr += "<button class='nav' id="+ (i+1) +">" + (i+1) + "</button>";
        }

        $("#results").prepend(buttonStr);

        // add table rows of results to existing table
        var resultsStr = makeResultRows(results, 1);

        $("tbody").append(resultsStr);

        $(".nav").click(function(){
          event.preventDefault();

          console.log("event in nav: ", event);

          //makeResultRows(storage, page);

        });
      }
    });

  });


});
