let accordionElems = document.querySelectorAll(".collapsible");
M.Collapsible.init(accordionElems, {
  inDuration: 0,
  onCloseEnd: (element) => {
    let header = element.querySelector(".collapsible-header");
    let content = element.querySelector(".collapsible-body");
    header.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
  },
  onOpenEnd: (element) => {
    let header = element.querySelector(".collapsible-header");
    let content = element.querySelector(".collapsible-body");
    header.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "false");
  },
});

accordionElems.forEach((accordionElem) => {
  let accordionHeaders = accordionElem.querySelectorAll(".collapsible-header");
  let accordionContents = accordionElem.querySelectorAll(".collapsible-body");

  accordionHeaders.forEach((element) => {
    element.setAttribute("aria-expanded", "false");
  });

  accordionContents.forEach((element) => {
    element.setAttribute("aria-hidden", "true");
  });
});

var carouselElems = document.querySelectorAll(".carousel");
M.Carousel.init(carouselElems, {
  duration: 0,
  indicators: true,
  fullWidth: true
});

var nextSlide = instance => {
  setTimeout(() => {
    instance.next();
    nextSlide(instance);
  }, 5000);
};

carouselElems.forEach(elem => {
  var instance = M.Carousel.getInstance(elem);
  nextSlide(instance);
});

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});

$(document).ready(function () {
  $('.carousel').carousel();


  // function for next slide
  $('.next').click(function () {
    $('.carousel').carousel('next');
  });

  // function for prev slide
  $('.prev').click(function () {
    $('.carousel').carousel('prev');
  });
});
