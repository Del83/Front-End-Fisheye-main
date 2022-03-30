function galeryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let srcMedia = `./assets/sample_photos/${photographerId}/`;
  if (image) {
    srcMedia += image;
  } else {
    srcMedia += video;
  }

  /** ---------- CREATION DU GABARIT DE LA GALERIE DES MEDIAS DU PHOTOGRAPHE ---------- */
  function getUserGaleryDOM() {
    /** FIGURES pour chaque médias */
    const figureGalery = document.createElement("figure");
    figureGalery.classList.add("media-figure");
    figureGalery.setAttribute("id", "figure-" + id);
    figureGalery.setAttribute("aria-label", "carte du média " + title);

    /** LEGENDES(TITRES et LIKES) des médias */
    const legendGalery = document.createElement("figcaption");

    /** TITRES des médias */
    const legendTitle = document.createElement("span");
    legendTitle.classList.add("legend-title");
    legendTitle.textContent = title;

    /** LIKES des médias */
    const legendLike = document.createElement("div");
    legendLike.classList.add("legend-like");

    /** INPUT des likes */
    const likeInput = document.createElement("input");
    likeInput.setAttribute("type", "checkbox");
    likeInput.setAttribute("id", id);
    likeInput.classList.add("like-input");
    likeInput.setAttribute("role", "img");
    likeInput.setAttribute("aria-label", "likes");
    likeInput.setAttribute("tabindex", "0");

    /** LABEL des likes */
    const likeLabel = document.createElement("label");
    likeLabel.setAttribute("for", id);
    likeLabel.classList.add("like-label");
    likeLabel.textContent = likes + " ";

    /** MEDIAS => vidéo ou image */
    if (image) {
      const imgPhoto = document.createElement("img");
      imgPhoto.classList.add("galery-medias");
      imgPhoto.setAttribute("src", srcMedia);
      imgPhoto.setAttribute("data-mediaid", id);
      imgPhoto.setAttribute("alt", title + ", closeup view");
      imgPhoto.setAttribute("role", "link");
      imgPhoto.setAttribute("tabindex", 0);
      figureGalery.appendChild(imgPhoto);
    } else {
      const vidPhoto = document.createElement("video");
      vidPhoto.classList.add("galery-medias");
      vidPhoto.setAttribute("type", "video/mp4");
      vidPhoto.setAttribute("src", srcMedia);
      vidPhoto.setAttribute("data-mediaid", id);
      vidPhoto.setAttribute("alt", title + ", closeup view");
      vidPhoto.setAttribute("role", "link");
      vidPhoto.setAttribute("tabindex", 0);
      figureGalery.appendChild(vidPhoto);
    }

    figureGalery.appendChild(legendGalery);
    legendGalery.appendChild(legendTitle);
    legendGalery.appendChild(legendLike);
    legendLike.appendChild(likeInput);
    legendLike.appendChild(likeLabel);
    return figureGalery;
  }

  /** ---------- CREATION DU GABARIT DE LA LIGHTBOX ---------- */
  function getUserGaleryLightbox() {
    /** création du CONTAINER des SLIDES de la lightbox */
    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides-container");

    /** création des SLIDES de la lightbox */
    const slides = document.createElement("figure");
    slides.classList.add("slides");
    slidesContainer.appendChild(slides);

    /** MEDIAS => vidéo ou image */
    const slideMedia = document.createElement("div");
    slideMedia.setAttribute("id", "slide-media" + id);
    slideMedia.classList.add("slide-media");
    slides.appendChild(slideMedia);
    if (image) {
      const imgPhotoLightbox = document.createElement("img");
      imgPhotoLightbox.setAttribute("src", srcMedia);
      imgPhotoLightbox.classList.add("lightbox-modal-media");
      imgPhotoLightbox.setAttribute("alt", "");
      imgPhotoLightbox.setAttribute("tabindex", "0");
      slideMedia.appendChild(imgPhotoLightbox);
    } else {
      const vidPhotoLightbox = document.createElement("video");
      vidPhotoLightbox.setAttribute("controls", "");
      vidPhotoLightbox.setAttribute("src", srcMedia);
      vidPhotoLightbox.setAttribute("type", "video/mp4");
      vidPhotoLightbox.setAttribute("preload", "metadata");
      vidPhotoLightbox.classList.add("lightbox-modal-media");
      vidPhotoLightbox.setAttribute("aria-label", title);
      vidPhotoLightbox.setAttribute("tabindex", "0");
      slideMedia.appendChild(vidPhotoLightbox);
    }

    /** LEGENDE(TITRE) des médias de la lightbox */
    const lightboxLegendTitle = document.createElement("figcaption");
    const titlePhoto = document.createElement("h4");
    titlePhoto.setAttribute("id", "title-photo");
    titlePhoto.textContent = title;

    slides.appendChild(lightboxLegendTitle);
    lightboxLegendTitle.appendChild(titlePhoto);
    return slidesContainer;
  }

  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    srcMedia,
    getUserGaleryDOM,
    getUserGaleryLightbox,
  };
}
