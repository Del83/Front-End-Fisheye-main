/** Eléments du DOM */
const lightboxDisplay = document.getElementById("lightbox");
const btnCloseLightbox = document.getElementById("lightbox-icon-close");
const prevNavigation = document.getElementById("prev");
const nextNavigation = document.getElementById("next");

/** Ouvre le carousel */
function openLightbox() {
  lightboxDisplay.style.display = "block";
  main.setAttribute("aria-hidden", true);
  lightboxDisplay.setAttribute("aria-hidden", false);
  prevNavigation.focus();
}

/** ferme le carousel */
function closeLightbox() {
  lightboxDisplay.style.display = "none";
  main.setAttribute("aria-hidden", false);
  lightboxDisplay.setAttribute("aria-hidden", true);
  logo.focus();
}

/** Class du carousel */
class Lightbox {
  constructor(currentSlide, element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1, // Nombre de slide lors du scroll
        slidesVisible: 1, // Nombre de slide visible
      },
      options
    );
    this.currentSlide = currentSlide;
    this.goToSlide(this.currentSlide);
    this.navigation();
  }

  /** Navigation dans le carousel */
  navigation() {
    prevNavigation.addEventListener(
      "click",
      this.prev.bind(this)
    ); /** Création d'une nouvelle fonction qui a pour contexte "this" de la valeur passée */
    nextNavigation.addEventListener("click", this.next.bind(this));

    /** Navigation avec le clavier */
    lightboxDisplay.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
      }
      if (e.key === "ArrowRight") {
        this.next();
      }
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

  /** Afficher le média suivant */
  next() {
    this.goToSlide(this.currentSlide + this.options.slidesToScroll);
  }

  /** Afficher le média précédent */
  prev() {
    this.goToSlide(this.currentSlide - this.options.slidesToScroll);
  }

  /** Afficher le média selon index */
  goToSlide(index) {
    if (index < 0) {
      index = this.element - this.options.slidesVisible; /**  */
    } else if (index > this.element - this.options.slidesVisible) {
      index = 0;
    }
    const lightboxContainer = document.getElementById("lightbox-container");
    let ratioSlider =
      (index * -100) /
      this
        .element; /** index de la photo multiplié par -100 puis divisé par le nombre de média total pour obtenir le pourcentage de décalage lors du clic d'ouverture */
    let ratioWidth =
      100 *
      this
        .element; /** Nombre de média multiplié par 100% --> pour agrandir la largeur du carousel en fonction du nombre de média */
    lightboxContainer.style.transform =
      "translateX(" +
      ratioSlider +
      "%)"; /** Décale l'affichage selon le ratioSlider */
    lightboxContainer.style.width = ratioWidth + "%";
    this.currentSlide = index;
  }
}
