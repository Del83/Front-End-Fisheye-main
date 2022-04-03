/** ---------- FETCH DATA pour récupérer les infos des photographes du fichier JSON ---------- */
async function getPhotographers() {
  await fetch(
    "./data/photographers.json"
  ) /** Attendre la récupération des données JSON */
    .then((res) =>
      res.json()
    ) /** Alors ce résultat est transformé en DATA (objet javascript) */
    .then(
      (data) => (photographers = data.photographers)
    ); /** Récupération dans DATA des données photographers */
  return {
    photographers: [
      ...photographers,
    ] /** On retourne un tableau avec les données des photographes */,
  };
}

/** ---------- Affichage du profil des photographes sur la page index.html ---------- */
function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    /** Boucle dans les photographes */
    const photographerModel =
      photographerFactory(
        photographer
      ); /** Récupération des données du photographe */
    const userCardDOM =
      photographerModel.getUserCardDOM(); /** Création de la carte du photographe avec les données du photographe */
    photographersSection.appendChild(
      userCardDOM
    ); /** On rattache cet élément dans le DOM */
  });
}

/** ---------- Initialisation pour l'affichage des données de la page index.html ---------- */
async function initIndex() {
  const { photographers } =
    await getPhotographers(); /** Récupère les données des photographes avant affichage */
  displayData(
    photographers
  ); /** Appel de la fonction d'affichage des données */
}

/** ---------- Appel de la fonction pour l'affichage des données de la page index.html ---------- */
initIndex();
