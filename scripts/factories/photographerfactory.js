function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `./assets/photographers/${portrait}`;

  /** ---------- CREATION DU GABARIT DE LA PAGE INDEX.HTML - PRESENTATION DES PHOTOGRAPHES ---------- */
  function getUserCardDOM() {
    /** LIEN vers la page du photographe - ajout de l'ID du photographe sur l'adresse HTML de la page photographer.html */
    const lien = document.createElement("a");
    lien.setAttribute("href", `./photographer.html?id=` + id);
    lien.classList.add(id);

    /** ARTICLE pour chaque photographe */
    const article = document.createElement("article");
    const div = document.createElement("div");
    const img = document.createElement("img"); /** Portrait du photographe */
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    const h4 = document.createElement("h4");
    h4.textContent = tagline;
    const h5 = document.createElement("h5");
    h5.textContent = price + "€/jour";
    article.appendChild(div);
    article.appendChild(lien);
    lien.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h5);
    return article;
  }

  /** ---------- CREATION DU GABARIT DU HEADER DE LA PAGE PHOTOGRAHER.HTML - PRESENTATION DU PHOTOGRAPHE ---------- */
  function getUserCardDOMPage() {
    const articlePage = document.createElement("section");
    const divProfil = document.createElement("div");
    const h1Page = document.createElement("h1");
    h1Page.textContent = name;
    const h2Page = document.createElement("h2");
    h2Page.textContent = city + ", " + country;
    const h3Page = document.createElement("h3");
    h3Page.textContent = tagline;
    const btnContact = document.createElement("button");
    btnContact.classList.add("contact-button");
    btnContact.setAttribute("onclick", "openModal()");
    btnContact.textContent = "Contactez-moi";
    const imgPage = document.createElement("img");
    imgPage.setAttribute("src", picture);
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
    const asideWidget = document.createElement("aside");
    const counterLikes = document.createElement("div");
    const counterLikesDisplay = document.createElement("span");
    counterLikesDisplay.classList.add("counter-likes");
    const likeHeart = document.createElement("i");
    likeHeart.classList.add("fas", "fa-heart");
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
