/** ---------- FETCH DATA pour récupérer les infos média du fichier JSON ---------- */
async function getLikes() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));
  return {
    medias: [...medias],
  };
}

/** ---------- GESTION DES LIKES  ---------- */
function addClic() {
  /** Elements du DOM */
  const likesInput = document.querySelectorAll(".like-input");

  /** ---------- Ecoute les inputs des likes ---------- */
  likesInput.forEach((likeInput) => {
    likeInput.addEventListener("click", (e) => {
      /** ---------- Variables ---------- */
      let likeText = parseInt(
        e.target.nextSibling.textContent
      ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
      let liked = e.target.nextSibling; /** Texte du label (nombre de like) */
      let maker = e.currentTarget; /** Input cible */

      /** Si l'input cible est non checké */
      if (!maker.checked) {
        likeText--; /** Décremente le label */
        /** Si l'input cible est checké */
      } else {
        likeText++; /** Incrémente le label */
      }
      liked.textContent = likeText; /** Modifie le label */
      displayLikes(); /** Rappel de la fonction d'affichage des likes du photopgraphe */
    });
  });
}

/** ---------- AFFICHAGE DU TOTAL DES LIKES ---------- */
function displayLikes() {
  /** ---------- Elements du DOM ---------- */
  const nbrLikes = document.querySelectorAll(".like-label");
  const displayLikeCounter = document.querySelector(".counter-likes");

  /** ---------- Variables ---------- */
  let likesText = 0;
  let totalLike = 0;
  let arrayLikes = [];

  nbrLikes.forEach((like) => {
    likesText = parseInt(
      like.textContent
    ); /** Transforme en nombre le texte à côté de l'input (label = nombre de like) */
    arrayLikes.push(
      likesText
    ); /** Alimente le tableau "arrayLikes" du nombre de like de chaque média du photographe */
    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0); /** Calcule la somme du tableau */
    return (displayLikeCounter.textContent =
      totalLike + " "); /** Met à jour le total des likes du photographe */
  });
}

/** ---------- Initialisation pour la gestion et affichage des likes ---------- */
async function initLike() {
  await initGalery(); /** Attend l'initialisation de la galerie */
  getLikes(); /** Appel de la fonction  qui récupère les données concernant les likes */
  return (
    displayLikes(), addClic()
  ); /** Renvoi les fonctions d'affichage du total des likes et la gestion des likes */
}

/** ---------- Appel de la fonction pour la gestion et affichage des likes ---------- */
initLike();
