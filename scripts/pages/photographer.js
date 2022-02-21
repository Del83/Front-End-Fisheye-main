const getPhotographers = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
};

const photographerProfilContainer =
  document.querySelector(".photograph-header");
const widget = document.querySelector(".widget");
const contact = document.querySelector(".nameContact");

let params = new URL(document.location).searchParams;
let id = params.get("id");

const photographerProfilDisplay = () => {
  photographers.forEach((photographer) => {
    if (photographer.id == id) {
      const photographerModelPage = photographerFactory(photographer);
      const userCardDOMPage = photographerModelPage.getUserCardDOMPage();
      photographerProfilContainer.appendChild(userCardDOMPage);
      const widgetDisplay = photographerModelPage.getUserCounterDOM();
      widget.appendChild(widgetDisplay);
      const contactDisplay = photographerModelPage.getUserContactDOM();
      contact.appendChild(contactDisplay);
    }
  });
};

async function initPage() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  photographerProfilDisplay(photographers);
}

initPage();
