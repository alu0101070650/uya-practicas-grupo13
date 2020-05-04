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
      nameHeader.attr('tabindex',0);
      nameText = $("<p></p>").text(value.name);
      nameText.attr('tabindex',0);
      bodyHeader = $("<h3></h3>").text("Body:");
      bodyHeader.attr('tabindex',0);
      body = $("<p></p>").text(value.body);
      body.attr('tabindex',0);

      separator = $("<hr></hr>");
      $("#results").append(nameHeader, nameText, bodyHeader, body, separator);
    });
  });
});
