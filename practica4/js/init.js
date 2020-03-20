var parallaxElems = document.querySelectorAll(".parallax");
M.Parallax.init(parallaxElems, {});

var sidenavElems = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenavElems, {});

var carouselElems = document.querySelectorAll(".carousel");
M.Carousel.init(carouselElems, {
  fullWidth: true,
  indicators: false,
  duration: 200
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
