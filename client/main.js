$(function() {
    
  $("#search-form").submit(function(event) {

    event.preventDefault();

    var query = $("#search-query").val();

    $.ajax({
      type: "POST",
      url: 'api/search',
      data: {query: query},
      success: function(results) {
        console.log("results: ", results);
        
        $("#search-query").val("");
      }
    });

  });

});
