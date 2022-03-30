/** FETCH DATA pour récupérer les infos des photographes du fichier JSON */
async function getPhotographers() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
}

/** Affichage du profil des photographes sur la page index.html */
function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

/** Attendre le chargement des infos des photographes pour afficher le profil des photographes sur la page index.html */
async function initIndex() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

/** Appel de la fonction pour l'affichage du profil des photographes */
initIndex();
