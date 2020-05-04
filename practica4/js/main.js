$("#join-form").submit(function (event) {
  let hasErrors = false;

  $("#errors").html("");
  $("#errors").attr("aria-hidden", "true");

  if ($("#first_name").val() === "") {
    $("#errors").append("<p>Por favor introduzca su nombre.</p>");
    hasErrors = true;
  }

  if ($("#last_name").val() === "") {
    $("#errors").append("<p>Por favor introduzca sus apellidos.</p>");
    hasErrors = true;
  }

  if ($("#email").val() === "") {
    $("#errors").append("<p>Por favor introduzca su email.</p>");
    hasErrors = true;
  }

  if (!$("#terms").prop('checked')) {
    $("#errors").append("<p>Por favor acepta los términos y condiciones de uso.</p>");
    hasErrors = true;
  }

  if (hasErrors) {
    $("#errors").attr("aria-hidden", "false");
    $("#errors").focus();
    return false;
  } else {
      return true;
  }
});
