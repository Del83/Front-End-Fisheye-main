//-----------FETCH DATA pour récupérer les infos média du fichier JSON
async function getLikes() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));
  return {
    medias: [...medias],
  };
}

function addClic() {
  const likesInput = document.querySelectorAll(".like-input");

  likesInput.forEach((likeInput) => {
    likeInput.addEventListener("input", (e) => {
      let likeText = parseInt(e.target.nextSibling.textContent);
      let liked = e.target.nextSibling;
      let maker = e.currentTarget;

      if (!maker.checked) {
        likeText--;
      } else {
        likeText++;
      }
      liked.textContent = likeText;
      displayLikes();
    });
  });
}

function displayLikes() {
  const nbrLikes = document.querySelectorAll(".like-label");
  const displayLikeCounter = document.querySelector(".counter-likes");
  let likeTest = 0;
  let totalLike = 0;
  let arrayLikes = [];

  nbrLikes.forEach((like) => {
    likeTest = parseInt(like.textContent);
    arrayLikes.push(likeTest);
    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return (displayLikeCounter.textContent = totalLike + " ");
  });
}

/** A chaque like d'une photo, lancement de la fonction addlike */

async function initLike() {
  //const { medias } = await getLikes();

  await initGalery();
  //await initLightbox();
  getLikes();
  return displayLikes(), addClic(); // rajouter
}

initLike();
