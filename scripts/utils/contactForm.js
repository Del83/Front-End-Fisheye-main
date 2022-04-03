/** ---------- Eléments du DOM ---------- */
const main = document.getElementById("main");
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"]'
);
const focusFirstName = document.getElementById("contact-first-name");
const logo = document.getElementById("logo");
const closeBtnModal = document.getElementById("close-modal");

/** ---------- Variables ---------- */
let first, last, email, message;

/** ---------- Ouvre le formulaire de contact ---------- */
function openModal() {
  modal.style.display = "block";
  main.setAttribute("aria-hidden", true);
  modal.setAttribute("aria-hidden", false);
  focusFirstName.focus();
}

/** ---------- Ferme le formulaire de contact ---------- */
function closeModal() {
  modal.style.display = "none";
  main.setAttribute("aria-hidden", false);
  modal.setAttribute("aria-hidden", true);
  logo.focus();
}

/** ---------- Navigation avec le clavier ---------- */
modal.addEventListener("keydown", function (e) {
  e.stopPropagation();
  if (e.key === "Escape") {
    closeModal();
  }
  if (e.key === "Tab") {
    if (document.activeElement === closeBtnModal) focusFirstName.focus();
  }
});

/** ---------- Affichage du message d'erreur si le champ du formulaire est mal ou pas rempli ---------- */
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

/** ---------- Contrôle si le champ prénom est valide selon critère ---------- */
const firstNameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("first", "Le prénom doit contenir entre 3 et 20 caractères");
    first = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "first",
      "Le prénom ne doit pas contenir de caractères spéciaux"
    );
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

/** ---------- Contrôle si le champ nom est valide selon critère ---------- */
const lastNameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("last", "Le nom doit contenir entre 3 et 20 caractères");
    last = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("last", "Le nom ne doit pas contenir de caractères spéciaux");
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

/** ---------- Contrôle si le champ email est valide selon critère ---------- */
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

/** ---------- Contrôle si le champ message est valide selon critère ---------- */
const messageChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 120)) {
    errorDisplay(
      "message",
      "Le message doit contenir entre 3 et 120 caractères"
    );
    message = null;
  } else {
    errorDisplay("message", "", true);
    message = value;
  }
};

/** ---------- Ecoute des inputs et contrôle leur validité selon les critères définis plus haut ---------- */
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (
      e.target.id /** recupère l'id html de chaque input du formulaire */
    ) {
      case "contact-first-name":
        firstNameChecker(
          e.target.value
        ); /** pour chaque input, on recupère la valeur du champ */
        break;
      case "contact-last-name":
        lastNameChecker(e.target.value);
        break;
      case "contact-email":
        emailChecker(e.target.value);
        break;
      case "contact-message":
        messageChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

/** ---------- VALIDATION DU FORMULAIRE ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /** Si les conditions pour la validation du formulaire sont réunies, alors : */
  if (first && last && email && message) {
    const data = {
      /** création de l'objet comprenant les informations collectées par le formulaire */
      first,
      last,
      email,
      message,
    };
    closeModal();
    console.log(data); /** Affichage dans la console de l'objet créé */

    inputs.forEach(
      (input) => (input.value = "")
    ); /** Effacement des informations collectées */

    first = null;
    last = null;
    email = null;
    message = null;
    alert(
      "Merci, votre message a bien été envoyé !"
    ); /** Affichage d'un message indiquant que le formulaire a été envoyé avec succès */
  } else {
    alert(
      "veuillez remplir correctement les champs"
    ); /** Affichage d'un message indiquant que le formulaire n'est pas rempli correctement */
  }
});
