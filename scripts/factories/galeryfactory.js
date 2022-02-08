function galeryFactory(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  const picturesPhotograph = `./assets/sample_photos/${photographerId}/${image}`;
  console.log(picturesPhotograph);

  function getUserGaleryDOM() {
    console.log(title);
    const articleGalery = document.createElement("article");
    const h1Page = document.createElement("h1");
    const imgPhoto = document.createElement("img");
    imgPhoto.setAttribute("src", picturesPhotograph);
    h1Page.textContent = title;
    articleGalery.appendChild(imgPhoto);
    articleGalery.appendChild(h1Page);
    return articleGalery;
  }

  return {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    picturesPhotograph,
    getUserGaleryDOM,
  };
}
