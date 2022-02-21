// DOM ELEMENTS - GENERALS
const form = document.getElementById("form");
const modal = document.getElementById("modal");
// DOM ELEMENTS - FORM FIELDS (champs formulaires)
const contactFirstName = document.getElementById("contact-first-name");
const contactLastName = document.getElementById("contact-last-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
// DOM ELEMENTS - FORM CONTENT (contenu du formulaire)
const content = document.querySelectorAll(".text-control");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// fonction validant le formulaire
function formValidation() {
  // fonction écoutant le bouton d'envoi du formulaire
  console.log("blebl");
  contactFirstName.addEventListener("input", (e) => {
    e.preventDefault(); // utilisation de cette methode pour annuler l'action par défaut du bouton d'envoi du formulaire
    console.log(e.target.value);
  });
}
