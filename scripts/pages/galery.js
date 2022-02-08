const getMedias = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));
  console.log(medias);
  return {
    medias: [...medias],
  };
};

let paramsGalery = new URL(document.location).searchParams;
let idGalery = paramsGalery.get("id");
const photographGalery = document.querySelector(".photograph-galery");

const photographGaleryDisplay = () => {
  const mediasFilter = medias.filter(
    (media) => media.photographerId === parseInt(idGalery)
  );
  console.log(mediasFilter);
  mediasFilter.forEach((media) => {
    if (medias.filter((media) => media.photographerId == parseInt(idGalery))) {
      const photographerModelGalery = galeryFactory(media);
      const userGalery = photographerModelGalery.getUserGaleryDOM();
      photographGalery.appendChild(userGalery);
    }
  });
};

async function initGalery() {
  // Récupère les medias des photographes
  const { medias } = await getMedias();
  photographGaleryDisplay(medias);
}

initGalery();
