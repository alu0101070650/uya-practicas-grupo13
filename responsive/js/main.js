// Initialization
var parallaxElems = document.querySelectorAll(".parallax");
M.Parallax.init(parallaxElems, {});

var sidenavElems = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenavElems, {});

let carouselElems = document.querySelectorAll(".carousel");
M.Carousel.init(carouselElems, {
  duration: 0,
  indicators: true,
  fullWidth: true,
});

carouselElems.forEach((carouselElem) => {
  let instance = M.Carousel.getInstance(carouselElem);
  let prevButton = carouselElem.querySelector("button.prev");
  let nextButton = carouselElem.querySelector("button.next");

  prevButton.onclick = () => {
    instance.prev();
  };

  nextButton.onclick = () => {
    instance.next();
  };
});

// Form errors
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
