var accordionElems = document.querySelectorAll('.collapsible');
M.Collapsible.init(accordionElems, {
  onCloseEnd: (element) => {
    console.log(element);
  }
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
