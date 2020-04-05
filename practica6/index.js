$("#form").submit(function(event) {
  event.preventDefault();
  var url = $(this).attr("action");
  var requestMethod = $(this).attr("method");
  var formData = $(this).serialize();

  $("#results").html("Cargando...");

  $.ajax({
    url: url,
    type: requestMethod,
    data: formData
  }).done(function(response) {
    $("#results").html("");
    $.each(response, function(index, value) {
      nameHeader = $("<h3></h3>").text("Name:");
      nameText = $("<p></p>").text(value.name);
      bodyHeader = $("<h3></h3>").text("Body:");
      body = $("<p></p>").text(value.body);
      separator = $("<hr></hr>");
      $("#results").append(nameHeader, nameText, bodyHeader, body, separator);
    });
  });
});
