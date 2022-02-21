function galeryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let srcMedia = `./assets/sample_photos/${photographerId}/`;
  if (image) {
    srcMedia += image;
  } else {
    srcMedia += video;
  }

  console.log();

  function getUserGaleryDOM() {
    const figureGalery = document.createElement("figure");
    figureGalery.classList.add(id, "hover-shadow");
    figureGalery.setAttribute("onclick", "openLightbox(); currentSlide()");
    /*figureGalery.addEventListener("onclick", () => {
      console.log("coucou");
      openLightbox();
      currentSlide();
    });*/
    const legendGalery = document.createElement("figcaption");
    const legendTitle = document.createElement("div");
    const legendLike = document.createElement("div");
    legendLike.classList.add("icone-like-photo");
    const h4Page = document.createElement("h4");
    const like = document.createElement("i");
    like.classList.add("fas", "fa-heart");
    if (image) {
      const imgPhoto = document.createElement("img");
      imgPhoto.setAttribute("src", srcMedia);
      figureGalery.appendChild(imgPhoto);
    } else {
      const vidPhoto = document.createElement("video");
      vidPhoto.setAttribute("type", "video/mp4");
      vidPhoto.setAttribute("src", srcMedia);
      vidPhoto.setAttribute("controls", null);
      figureGalery.appendChild(vidPhoto);
    }
    h4Page.textContent = title;
    figureGalery.appendChild(legendGalery);
    legendGalery.appendChild(legendTitle);
    legendTitle.appendChild(h4Page);
    legendGalery.appendChild(legendLike);
    legendLike.appendChild(like);
    return figureGalery;
  }

  function getUserGaleryLightbox() {
    const lightboxModalMain = document.createElement("div");
    lightboxModalMain.classList.add("lightbox-modal-main", "mySlides");
    if (image) {
      const imgPhotoLightbox = document.createElement("img");
      imgPhotoLightbox.setAttribute("src", srcMedia);
      imgPhotoLightbox.classList.add("lightbox-modal-media");
      lightboxModalMain.appendChild(imgPhotoLightbox);
    } else {
      const vidPhotoLightbox = document.createElement("video");
      vidPhotoLightbox.setAttribute("type", "video/mp4");
      vidPhotoLightbox.setAttribute("src", srcMedia);
      vidPhotoLightbox.classList.add("lightbox-modal-media");
      vidPhotoLightbox.setAttribute("controls", null);
      lightboxModalMain.appendChild(vidPhotoLightbox);
    }
    const titlePhoto = document.createElement("h4");
    titlePhoto.setAttribute("id", "title-photo");
    titlePhoto.textContent = title;
    lightboxModalMain.appendChild(titlePhoto);
    return lightboxModalMain;
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
