// Accordion

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

// Carousel

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
