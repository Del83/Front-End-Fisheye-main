// Elements du DOM
const selectElt = document.querySelector("select");
const listboxCustom = document.querySelector(".listbox-custom");

// Création de la nouvelle listbox
const listboxCustomtNew = document.createElement("div");
listboxCustomtNew.classList.add("listbox-custom-new");
listboxCustomtNew.innerHTML =
  selectElt.options[selectElt.selectedIndex].innerHTML;
listboxCustom.appendChild(listboxCustomtNew);

// Création de la liste déroulante
const newMenu = document.createElement("div");
newMenu.classList.add("select-items", "select-hide");
newMenu.setAttribute("id", "listbox-select-items");

// Création de la listbox avec les options du select
for (let option of selectElt.options) {
  const newOption = document.createElement("div");
  newOption.innerHTML = option.innerHTML;
  // Ecoute les options et à chaque clic modifie l'option de tri
  newOption.addEventListener("click", function () {
    for (let option of selectElt.options) {
      if (option.innerHTML === this.innerHTML) {
        selectElt.selectedIndex = option.index;
        listboxCustomtNew.innerHTML = this.innerHTML;
      }
    }
    // on simule un clic sur "listboxCustomtNew" (pour fermer la liste)
    listboxCustomtNew.click();
  });

  // On rattache la liste déroulante à la nouvelle listbox ??????,????
  newMenu.appendChild(newOption);
}

// On rattache la liste déroulante à la nouvelle listbox ?????? ?????
listboxCustom.appendChild(newMenu);

listboxCustomtNew.addEventListener("click", function (e) {
  // on empèche la propagation du clic
  e.stopPropagation();
  // on retire le "select-hide" de notre liste déroulante
  this.nextSibling.classList.toggle("select-hide"); // toggle = recherche la chaine de caractère et si présente, il retire)
  // Ajout de la class "active" pour modifier la flèche de la liste déroulante (pas encore utilisé, permettra d'insérer un scroll up)
  this.classList.toggle("active");
  photographGaleryDisplay();
});

function sortMediaByTitle(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (b.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
}

function sortMediaByLikes(a, b) {
  return a.likes - b.likes;
}

function sortMediaByDate(a, b) {
  if (a.date > b.date) {
    return -1;
  }
  if (b.date < b.date) {
    return 1;
  }
  return 0;
}

// selection enfant direct de select-items ??????? ?????
//const selectItem = document.querySelector("#listbox-select-items");
//console.log(selectItem);
