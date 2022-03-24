// DOM ELEMENTS - GENERALS
const lightboxDisplay = document.getElementById("lightbox");

//photosLightbox.addEventListener("click", openLightbox());

function openLightbox() {
  lightboxDisplay.style.display = "block";
}

function closeLightbox() {
  lightboxDisplay.style.display = "none";
}

class Lightbox {
  constructor(currentSlide, element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );
    this.currentSlide = currentSlide;
    this.goToSlide(this.currentSlide);
    this.navigation();
  }

  navigation() {
    const prevNavigation = document.getElementById("prev");
    const nextNavigation = document.getElementById("next");

    prevNavigation.addEventListener("click", this.prev.bind(this));
    nextNavigation.addEventListener("click", this.next.bind(this));
  }

  next() {
    this.goToSlide(this.currentSlide + this.options.slidesToScroll);
  }

  prev() {
    this.goToSlide(this.currentSlide - this.options.slidesToScroll);
  }

  goToSlide(index) {
    if (index < 0) {
      index = this.element - this.options.slidesVisible;
    } else if (index > this.element) {
      index = 0;
    }
    const lightboxContainer = document.getElementById("lightbox-container");
    let ratioSlider = (index * -100) / this.element;
    let ratioWidth = 100 * this.element;
    //console.log(ratioSlider);
    //console.log(lightboxContainer);
    lightboxContainer.style.transform = "translateX(" + ratioSlider + "%)";
    lightboxContainer.style.width = ratioWidth + "%";
    this.currentSlide = index;
  }
}
