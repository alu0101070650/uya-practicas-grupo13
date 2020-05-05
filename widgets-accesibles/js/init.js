var accordionElems = document.querySelectorAll('.collapsible');
M.Collapsible.init(accordionElems, options);

var carouselElems = document.querySelectorAll(".carousel");
M.Carousel.init(carouselElems, {
  indicators: true
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
