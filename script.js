var enter = document.getElementById("inputText");
enter.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    search();
  }
});

function search() {

  var renderResult = document.getElementById("renderResults");
  renderResults.innerHTML = "";
  var query = $("#inputText").val();
  $("#status").text('Searching for ' + query + '...');
  $.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: {
      action: 'query',
      list: 'search',
      srsearch: query,
      format: 'json'
    },
    dataType: 'jsonp',
    success: function(result) {

      $("#status").text('Results for ' + query + '...');
      for (var i = 0; i < result.query.search.length; ++i) {
        renderResult.innerHTML += '<div class="row"><div class="col s8 offset-s2 ">          <div class="card grey darken-3">            <div class="card-content white-text">              <span class="card-title">' + result.query.search[i].title + '</span>              <p>' + result.query.search[i].snippet + '</p>            </div>            <div class="card-action"> <a target="_blank" href="https://en.wikipedia.org/wiki/' + result.query.search[i].title + '">Read More</a>            </div>          </div>        </div>      </div>';

      }

    }

  });

  //alert(query);

}