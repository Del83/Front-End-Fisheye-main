function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `./assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const lien = document.createElement("a");
    lien.setAttribute("href", `./photographer.html?id=` + id);
    lien.classList.add(id);
    const article = document.createElement("article");
    const div = document.createElement("div");
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

  function getUserCardDOMPage() {
    const articlePage = document.createElement("article");
    const divProfil = document.createElement("div");
    const h1Page = document.createElement("h1");
    h1Page.textContent = name;
    const h2Page = document.createElement("h2");
    h2Page.textContent = city + ", " + country;
    const h3Page = document.createElement("h3");
    h3Page.textContent = tagline;
    const btnContact = document.createElement("button");
    btnContact.classList.add("contact_button");
    btnContact.setAttribute("onclick", "displayModal()");
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
  };
}
