//-----------FETCH DATA pour récupérer les infos média du fichier JSON
const getMedias = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));

  return {
    medias: [...medias],
  };
};

function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get("id"));
}

function photographGaleryDisplay() {
  const mediasFilter = medias.filter(
    (media) => media.photographerId === parseInt(getPhotographerId())
  );

  const itemsSort = document.querySelector(".listbox-custom-new").textContent;

  function selectSort(itemSort) {
    if (itemSort === "Date") {
      return sortMediaByDate;
    } else if (itemSort === "Popularité") {
      return sortMediaByLikes;
    } else {
      return sortMediaByTitle;
    }
  }

  mediasFilter.sort(selectSort(itemsSort));
  const photographGalery = document.querySelector(".photograph-galery");
  const photographLightbox = document.getElementById("lightbox-container");
  photographGalery.innerHTML = "";
  photographLightbox.innerHTML = "";
  mediasFilter.forEach((media) => {
    if (mediasFilter.indexOf()) {
      const photographerModelGalery = galeryFactory(media);
      const userGalery = photographerModelGalery.getUserGaleryDOM();
      photographGalery.appendChild(userGalery);

      const photographerModelGaleryPhoto = galeryFactory(media);
      const userGaleryPhoto =
        photographerModelGaleryPhoto.getUserGaleryLightbox();
      photographLightbox.appendChild(userGaleryPhoto);
    }
  });

  const mediasLightbox = document.querySelectorAll(".galery-medias");

  for (let i = 0; i < mediasLightbox.length; i++) {
    mediasLightbox[i].addEventListener("click", (e) => {
      new Lightbox(i, mediasLightbox.length);
      openLightbox();
    });
    mediasLightbox[i].addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        new Lightbox(i + 1, mediasLightbox.length);
        openLightbox();
      }
    });
  }
  new Lightbox();
}

async function initGalery() {
  // Récupère les medias des photographes
  const { medias } = await getMedias();
  photographGaleryDisplay(medias);
}
