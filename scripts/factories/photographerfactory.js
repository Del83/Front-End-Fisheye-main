function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  console.log(data);
  const picture = `./assets/photographers/${portrait}`;

  /** ---------- CREATION DU GABARIT DE LA PAGE INDEX.HTML - PRESENTATION DES PHOTOGRAPHES ---------- */
  function getUserCardDOM() {
    /** LIEN vers la page du photographe - ajout de l'ID du photographe sur l'adresse HTML de la page photographer.html */
    const lien = document.createElement("a");
    lien.setAttribute("href", `./photographer.html?id=` + id);

    /** ARTICLE pour chaque photographe */
    const article = document.createElement("article");
    article.setAttribute("aria-label", "carte du photographe " + name);

    /** Portrait et nom du photographe */
    const div = document.createElement("div");

    /** Portrait du photographe */
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "portrait de " + name);

    /** Nom du photographe */
    const h2 = document.createElement("h2");
    h2.textContent = name;

    /** Légende du portrait du photographe */
    const legendPortait = document.createElement("section");

    /** Lieu de résidence du photographe */
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;

    /** Slogan du photographe */
    const h4 = document.createElement("h4");
    h4.textContent = tagline;

    /** Tarif journalier du photographe */
    const h5 = document.createElement("h5");
    h5.textContent = price + "€/jour";

    article.appendChild(div);
    article.appendChild(lien);
    lien.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    article.appendChild(legendPortait);
    legendPortait.appendChild(h3);
    legendPortait.appendChild(h4);
    legendPortait.appendChild(h5);
    return article;
  }

  /** ---------- CREATION DU GABARIT DU HEADER DE LA PAGE PHOTOGRAHER.HTML - PRESENTATION DU PHOTOGRAPHE ---------- */
  function getUserCardDOMPage() {
    const articlePage = document.createElement("section");
    const divProfil = document.createElement("div");

    /** Nom du photographe */
    const h1Page = document.createElement("h1");
    h1Page.textContent = name;

    /** Lieu de résidence du photographe */
    const h2Page = document.createElement("h2");
    h2Page.textContent = city + ", " + country;

    /** Slogan du photographe */
    const h3Page = document.createElement("h3");
    h3Page.textContent = tagline;

    /** Bouton pour accès au formulaire de contact du photographe */
    const btnContact = document.createElement("button");
    btnContact.classList.add("contact-button");
    btnContact.setAttribute("onclick", "openModal()");
    btnContact.setAttribute("aria-label", "Contact Me");
    btnContact.textContent = "Contactez-moi";

    /** Portrait du photographe */
    const imgPage = document.createElement("img");
    imgPage.setAttribute("src", picture);
    imgPage.setAttribute("alt", "portrait du photographe");

    articlePage.appendChild(divProfil);
    divProfil.appendChild(h1Page);
    divProfil.appendChild(h2Page);
    divProfil.appendChild(h3Page);
    articlePage.appendChild(btnContact);
    articlePage.appendChild(imgPage);
    return articlePage;
  }

  /** ---------- CREATION DU GABARIT DU WIDGET DE LA PAGE PHOTOGRAHER.HTML - TARIF JOURNALIER ET LIKE DU PHOTOGRAPHE ---------- */
  function getUserCounterDOM() {
    /** Widget indiquant le tarif journalier et nombre de like du photographe */
    const asideWidget = document.createElement("aside");
    const counterLikes = document.createElement("div");

    /** Compteur de like */
    const counterLikesDisplay = document.createElement("span");
    counterLikesDisplay.classList.add("counter-likes");
    const likeHeart = document.createElement("i");
    likeHeart.classList.add("fas", "fa-heart");
    likeHeart.setAttribute("alt", "");
    likeHeart.setAttribute("role", "img");

    /** Tarif journalier du photographe */
    const priceWidget = document.createElement("div");
    const h5Widget = document.createElement("h5");
    h5Widget.textContent = price + "€/jour";

    asideWidget.appendChild(counterLikes);
    counterLikes.appendChild(counterLikesDisplay);
    counterLikes.appendChild(likeHeart);
    asideWidget.appendChild(priceWidget);
    priceWidget.appendChild(h5Widget);
    return asideWidget;
  }

  /** ---------- AFFICHAGE DU NOM DU PHOTOGRAPHE DANS LE FORMULAIRE DE CONTACT DE LA PAGE PHOTOGRAHER.HTML ---------- */
  function getUserContactDOM() {
    const contactName = document.createElement("span");
    contactName.textContent = name;
    return contactName;
  }

  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    picture,
    getUserCardDOM,
    getUserCardDOMPage,
    getUserCounterDOM,
    getUserContactDOM,
  };
}
