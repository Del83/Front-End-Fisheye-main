// DOM ELEMENTS - GENERALS
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"]'
);

let first, last, email, message;

// FUNCTION OPEN MODAL
function openModal() {
  modal.style.display = "block";
}

// FUNCTION CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
}

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

const firstNameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("first", "Le nom doit contenir entre 3 et 20 caractères");
    first = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("first", "Le nom ne doit pas contenir de caractères spéciaux");
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

const lastNameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("last", "Le prénom doit contenir entre 3 et 20 caractères");
    last = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "last",
      "Le prénom ne doit pas contenir de caractères spéciaux"
    );
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

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

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstNameChecker(e.target.value);
        break;
      case "last":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "message":
        messageChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (first && last && email && message) {
    const data = {
      first,
      last,
      email,
      message,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));

    first = null;
    last = null;
    email = null;
    message = null;
    alert("Merci, votre message a bien été envoyé !");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});
