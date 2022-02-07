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
