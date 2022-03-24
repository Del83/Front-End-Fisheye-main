/** FETCH DATA pour récupérer les infos photographers du fichier JSON */
async function getPhotographers() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
}

/** Fonction pour récupérer l'ID photographe dans l'URL de la page photographer.html*/
function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get("id"));
}

/** Affichage du profil du photographe sur la page photographer.html */
function displayProfil() {
  const photographerProfilContainer =
    document.querySelector(".photograph-header");
  const widget = document.querySelector(".widget");
  const contact = document.querySelector(".nameContact");
  photographers.forEach((photographer) => {
    if (photographer.id == getPhotographerId()) {
      // Si l'id du photographe est égal à l'id de l'URL de la page photophapher.html
      const photographerModelPage = photographerFactory(photographer);
      const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
      photographerProfilContainer.appendChild(userCardDOMPage);

      /** Affichage du widget */
      const widgetDisplay = photographerModelPage.getUserCounterDOM();
      widget.appendChild(widgetDisplay);

      /** Affichage du formulaire de contact */
      const contactDisplay = photographerModelPage.getUserContactDOM();
      contact.appendChild(contactDisplay);
    }
  });
}

/** Attendre le chargement des infos des photographes pour afficher le profil des photographes sur la page photographer.html */
async function initPage() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayProfil(photographers);
}

/** Appel de la fonction pour l'affichage du profil des photographes */
initPage();
