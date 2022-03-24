const photographers = "";

function getPhotographers() {
  fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      const photographers = data.photographers;
      console.log(photographers);
    });
  return {
    photographers: [...photographers],
  };
}

function photographerFactory(photographer) {
  const { name, portrait } = photographer;

  const picture = `./assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }
  return { name, picture, getUserCardDOM };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

const getPhotographersPage = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  console.log(photographers.name[1]);
  return {
    photographers: [...photographers],
  };
};

const photographerProfilContainer =
  document.querySelector(".photograph-header");
//console.log(photographerProfilContainer);

(async () => {
  let dataPhoto = "./data/photographers.json";
  let response = await fetch(dataPhoto);

  let commits = await response.json(); // read response body and parse as JSON

  const resultat = commits.find((photograph) => photograph.id === "243");
  console.log(resultat);
})();

import { getPhotographers } from "./scripts/pages/index.js";

/////////////////////

const getPhotographers = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
};

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

////////////////////

async function displayDataPage(photographers) {
  const photographHeader = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const photographerModelPage = photographerPageFactory(photographer);
    const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
    photographHeader.appendChild(userCardDOMPage);
  });
}

async function initPage() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayDataPage(photographers);
}

initPage();

////////////////////////

const getPhotographers = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
};

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  const photographHeader = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const photographerModelPage = photographerPageFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
    photographersSection.appendChild(userCardDOM);
    photographHeader.appendChild(userCardDOMPage);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

//////////////////

function photographerPageFactory(dataPage) {
  const { name, city, country, tagline, portrait } = dataPage;

  const picture = `./assets/photographers/${portrait}`;

  function getUserCardDOMPage() {
    const articlePage = document.createElement("article");
    const h4Page = document.createElement("h4");
    h4Page.textContent = tagline;
    articlePage.appendChild(h4Page);
    return articlePage;
  }
  return { name, city, country, tagline, picture, getUserCardDOMPage };
}

///////////////

const photographerProfilContainer =
  document.querySelector(".photograph-header");
console.log(photographerProfilContainer);

const photographerProfilDisplay = async () => {
  await getPhotographers(); // on va chercher les données de la fetchApi medias

  //recherche des photographes par leur id et affichage du profil-------------
  const photographer = photographers.find(
    (photographer) => photographer.id === parseInt(id)
  );
  //console.log(photographer);
  //console.log(photographer.id);

  const photographerProfil = `
          <div role="text" class="photograph_profil">
          <h2>${photographer.name}</h1>
          <p class="photograph_city">${photographer.city}, ${photographer.country}</p>
          <p class="photograp_tag">${photographer.tagline}</p>
      </div>
  
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  
  
      <div>
      <img class="photograph_picture" src="./assets/photographers/${photographer.portrait}" aria-label="${photographer.alt}" alt="${photographer.alt}">
      </div>
  
  
      <label for="trier">Trier par</label>
      <select class="btn-select" name="select" id="select">
          <option value="popularité">Popularité</option>
          <option value="date">Date</option>
          <option value="titre">Titre</option>
      </select>
  `;

  if (photographer) {
    photographerProfilContainer.innerHTML = photographerProfil;
  }
};

photographerProfilDisplay();

////////

export function bonjour() {
  console.log("Hello world");
}

bonjour();

////

async function displayDataPage(photographers) {
  const photographHeader = document.querySelector(".photograph-header");
  const photographerModelPage = photographerFactory(data[1]);
  const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
  photographHeader.appendChild(userCardDOMPage);
}

async function initPage() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayDataPage(photographers);
}

initPage();

/////////////

function getUserCardDOMPage() {
  const articlePage = document.createElement("article");
  const h4Page = document.createElement("h4");
  h4Page.textContent = data.id;
  articlePage.appendChild(h4Page);
  return articlePage;
}



//////////////:




const photographerProfilDisplay = async () => {
    await getPhotographers(); // on va chercher les données de la fetch
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    const photographerModelPage = photographerPageFactory(photographers);
    const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
    photographerProfilContainer.appendChild(userCardDOMPage);
    console.log(id);
  };



  //////////////


  async function photographerProfilDisplay(photographers) {
    const photographerProfilContainer =
      document.querySelector(".photograph-header");
    await getPhotographers(); // on va chercher les données de la fetch
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
  
    const photographerModelPage = photographerPageFactory(photographers);
    const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
    photographerProfilContainer.appendChild(userCardDOMPage);
    console.log(id);
  }



///////////////


  const photographerProfilContainer =
  document.querySelector(".photograph-header");

const photographerProfilDisplay = async () => {
  await getPhotographers(); // on va chercher les données de la fetch
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  const photographerModelPage = photographerFactory(photographers);
  const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
  photographerProfilContainer.appendChild(userCardDOMPage);
  console.log(id);
};

async function initPage() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  photographerProfilDisplay(photographers);
}

initPage();









//////////////





  function getUserCardDOM() {
    const lien = document.createElement("a");
    lien.setAttribute("href", `./photographer.html?id=` + id);
    lien.classList.add(id);
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    const h4 = document.createElement("h4");
    h4.textContent = tagline;
    const h5 = document.createElement("h5");
    h5.textContent = price + "€/jour";
    article.appendChild(img);
    article.appendChild(lien);
    lien.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h5);
    return article;
  }



  const photographerProfilDisplay = async () => {
    await getPhotographers(); // on va chercher les données de la fetch
  
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    const photographerModelPage = photographerFactory(photographers);
    const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
    photographerProfilContainer.appendChild(userCardDOMPage);
    console.log(id);
  };


/////////////////////////

  async function photographerProfilDisplay(photographers) {
    photographers.forEach((photographerId) => {
      const photographerModelPage = photographerFactory(photographers);
      const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
      photographerProfilContainer.appendChild(userCardDOMPage);
      console.log(photographerId.name);
    });
  }
  
  async function initPage() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    photographerProfilDisplay(photographers);
  }
  
  initPage();




  //////////////



  const photographGalery = document.querySelector(".photograph-galery");
  console.log(photographGalery);
  
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  
  const photographGaleryDisplay = () => {
    medias.forEach((media) => {
      if (media.id == id) {
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




//////////////

let params = new URL(document.location).searchParams;
let id = params.get("id");

const photographGaleryDisplay = () => {
  medias.forEach((media) => {
    const photographerModelGalery = galeryFactory(media);
    const userGalery = photographerModelGalery.getUserGaleryDOM();
    photographGalery.appendChild(userGalery);
  });
};

async function initGalery() {
  // Récupère les medias des photographes
  const { medias } = await getMedias();
  photographGaleryDisplay(medias);
}

initGalery();


///////////////


const photographGaleryDisplay = () => {
    medias.forEach((media) => {
      if (media.id == id) {
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
  


/////////////////////////////


  const getPhotographerMedias = () => {
  
  
    personnalMedias = photographerMedias.map(media => ({ ...media, liked: "far" }));
    ////////////////////////////////////////////////////////////////////////////////////
    /////     CTRL IF LOCAL STORAGE     ////////////////////////////////////////////////
    personnalMedias = personnalMedias.map(media => {
        if (localStorage.getItem(`${media.id}_heart`) !== null) {
            media.liked = localStorage.getItem(`${media.id}_heart`);
            media.likes = parseInt(localStorage.getItem(`${media.id}_likes`));
        }
        return media;
    });
  
  
  
  
  
  
  const photographGaleryDisplay = () => {
  let photographerMedias = medias.filter(media => media.photographerId == idGalery;
  
  
    medias.forEach((media) => {
      if (media.id == id) {
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
  


//////////////////////////



let paramsGalery = new URL(document.location).searchParams;
let idGalery = paramsGalery.get("id");
console.log(idGalery);

const photographGaleryDisplay = () => {
  medias.forEach((media) => {
    const photographerMedias = medias.filter(
      (media) => media.photographerId == idGalery
    );
    console.log(photographerMedias);
    if (photographerMedias == idGalery) {
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

////////////

const photographGaleryDisplay = () => {
    const mediasFilter = medias.filter(
      (media) => media.photographerId === parseInt(idGalery)
    );
    console.log(mediasFilter);
    medias.forEach((media) => {
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


  /////////////

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
      console.log(title);
      const articleGalery = document.createElement("article");
      const h1Page = document.createElement("h1");
      if (image) {
        const imgPhoto = document.createElement("img");
        imgPhoto.setAttribute("src", srcMedia);
        articleGalery.appendChild(imgPhoto);
      } else {
        const vidPhoto = document.createElement("video");
        vidPhoto.setAttribute("type", "video/mp4");
        vidPhoto.setAttribute("src", srcMedia);
        vidPhoto.setAttribute("controls", null);
        articleGalery.appendChild(vidPhoto);
      }
  
      h1Page.textContent = title;
      articleGalery.appendChild(h1Page);
      return articleGalery;
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
    };
  }

////////////

Action à rajouter pour renvoyer sur la page du photographe
<form
name="form"
action="index.html"
method="get"
onsubmit="return formValidation()"
id="form"
>


///////////


function getUserGaleryLightbox() {
    const titlePhoto = document.createElement("div");
    titlePhoto.setAttribute("id", "title-photo");
    titlePhoto.textContent = title;
    return titlePhoto;
  }


  ///////////////

  <i id="lightbox-icon-close" onclick="closeLightbox()">&#10005;</i>
      <div id="slides-container" class="modal-content">
        <div>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        </div>
        <div id="slide-media"></div>
        <div>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
      </div>


///////////////////


/** création du bouton PREV de la lightbox */
    const slidePrev = document.createElement("bouton");
    slidePrev.classList.add("prev");
    slidePrev.textContent = "<";
    //lightboxPrev.setAttribute("onclick", "plusSlides(-1)");

    /** création du bouton NEXT de la lightbox */
    const slideNext = document.createElement("bouton");
    slideNext.classList.add("next");
    slideNext.textContent = ">";
    //lightboxPrev.setAttribute("onclick", "plusSlides(1)");

    ///////////


/*function currentMedia(imgs) {
  const expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  //expandImg.parentElement.style.display = "block";
  openLightbox();
}*/

/* for (let i = 0; i < mediasLightbox.length; i++) {
    mediasLightbox[i].addEventListener("click", (e) => {
      console.log("koukou");
      openLightbox();
    });
  }*/

/*async function initLightboxContainer() {
  //const { medias } = await getLikes();

  await initGalery();
  //await initLightbox();
  getLikes();
  return addClic(), displayLikes();
}

initLightboxContainer();

/*const slideIndex = 1;
const slides = document.getElementsByClassName("slides");

//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //slides[slideIndex - 1].style.display = "block";  CA BLOQUE LE RESTE :-(
}*/


//////////////////// recup id photo cliquer


const mediasLightbox = document.querySelectorAll(".galery-medias");
//console.log(mediasLightbox);
for (let i = 0; i < mediasLightbox.length; i++) {
  mediasLightbox[i].addEventListener("click", (e) => {
    //console.log(e.target.dataset.mediaid);
    new Lightbox(i, mediasLightbox.length);
    openLightbox();
  });
}
new Lightbox();
}


//////////


function addClic() {
  //const legendLike = document.querySelectorAll(".legend-like");
  //legendLike.querySelectorAll("input:child-first");
  const likesInput = document.querySelectorAll(".like-input");

  const nbrLikes = document.querySelectorAll(".like-label");

  // console.log(nbrLikes);

  likesInput.forEach((likeInput) => {
    likeInput.addEventListener("input", (e) => {
      let likeText = parseInt(e.target.nextSibling.innerHTML);

      let maker = e.currentTarget;
      console.log(nbrLikes.label);
      if (!maker.checked) {
        console.log((likeText -= 1));
        likeText -= 1;
      } else {
        likeText += 1;
        console.log((likeText += 1));
      }
    });
    return displayLikes();
  });
}

function displayLikes() {
  const nbrLikes = document.querySelectorAll(".like-label");
  const displayLikeCounter = document.querySelector(".counter-likes");
  let likeTest = 0;
  let arrayLikes = [];
  nbrLikes.forEach((like) => {
    likeTest = parseInt(like.textContent);
    arrayLikes.push(likeTest);
    const totalLike = arrayLikes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    console.log(likeTest);
    //console.log(totalLike);
    return (displayLikeCounter.textContent = totalLike + " ");
  });
}


/*async function TotalLikesDisplay() {
  const clicLikes = document.querySelectorAll(".like-label");
  const displayLikeCounter = document.querySelector(".counter-likes");

  clicLikes.forEach((like) => {
    likeTest = parseInt(like.textContent);
    arrayLikes.push(likeTest);
    const totalLike = arrayLikes.reduceRight(
      (accumulator, currentValue) => accumulator + currentValue
    );
    displayLikeCounter.textContent = totalLike + " ";
  });
}*/

/*c
      clic.addEventListener("input", () => {
        if (clic.checked) {
          console.log(likeTest++);
          //console.log((totalLike += 1));
          displayLikeCounter.textContent = totalLike++ + " ";
        } else {
          console.log(likeTest--);
          //console.log((totalLike -= 1));
          displayLikeCounter.textContent = totalLike-- + " ";
          return totalLike;
        }
      });
    });*/

/*function addClic() {
      //const legendLike = document.querySelectorAll(".legend-like");
    
      //const likeInput = document.querySelectorAll(".like-input");
    
      //legendLike.querySelectorAll("input:child-first");
    
      const nbrLikes = document.querySelectorAll(".like-label");
      // console.log(nbrLikes);
      for (let i = 0; i < nbrLikes.length; i++) {
        nbrLikes[i].addEventListener("click", () => {
          //let maker = e.currentTarget;
          console.log("!likeInput");
    
          if (!nbrLikes.checked) {
            nbrLikes.textContent++;
          } else {
            nbrLikes.textContent--;
          }
          return displayLikes();
        });
      }
    }*/

/*function addClic() {
      //const legendLike = document.querySelectorAll(".legend-like");
      //legendLike.querySelectorAll("input:child-first");
      const likeInput = document.querySelectorAll(".like-input");
      const nbrLikes = document.querySelectorAll(".like-label");
      // console.log(nbrLikes);
    
      for (let i = 0; i < likeInput.length; i++) {
        likeInput[i].addEventListener("input", (e) => {
          let likeText = parseInt(e.target.nextSibling.textContent);
          //console.log(likeText);
          let maker = e.currentTarget;
          if (!maker.checked) {
            console.log((likeText -= 1));
            likeText -= 1;
          }
          if (maker.checked) {
            likeText += 1;
            console.log((likeText += 1));
          }
          return displayLikes();
        });
      }
    } */