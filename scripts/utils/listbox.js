/** ---------- Eléments du DOM ---------- */
const selectElt = document.querySelector("select");
const listboxCustom = document.querySelector(".listbox-custom");

/** ---------- Création de la nouvelle listbox ---------- */
const listboxCustomtNew = document.createElement("div");
listboxCustomtNew.classList.add("listbox-custom-new");
listboxCustomtNew.setAttribute("role", "button");
listboxCustomtNew.setAttribute("aria-haspopup", "listbox");
listboxCustomtNew.setAttribute("aria-expanded", "");
listboxCustomtNew.setAttribute("tabindex", 0);
listboxCustomtNew.innerHTML =
  selectElt.options[selectElt.selectedIndex].innerHTML;
listboxCustom.appendChild(listboxCustomtNew);

/** ---------- Création de la liste déroulante ---------- */
const newMenu = document.createElement("div");
newMenu.classList.add("select-items", "select-hide");
newMenu.setAttribute("id", "listbox-select-items");
newMenu.setAttribute("aria-haspopup", "listbox");
newMenu.setAttribute("aria-expanded", "true");
newMenu.setAttribute("tabindex", "0");

/** ---------- Création de la listbox avec les options du select ---------- */
for (let option of selectElt.options) {
  const newOption = document.createElement("div");
  newOption.setAttribute("role", "listbox");
  newOption.setAttribute("aria-activedescendant", "trier");
  newOption.setAttribute("aria-labelledby", "listbox-select-items");
  newOption.setAttribute("tabindex", "0");
  newOption.innerHTML = option.innerHTML;

  /** ---------- Ecoute les options et à chaque clic modifie l'option de tri ---------- */
  newOption.addEventListener("click", function () {
    const changeOption = () => {
      for (let option of selectElt.options) {
        if (option.innerHTML === this.innerHTML) {
          selectElt.selectedIndex = option.index;
          listboxCustomtNew.innerHTML = this.innerHTML;
        }
      }
      listboxCustomtNew.click(); /** on simule un clic sur "listboxCustomtNew" (pour fermer la liste) */
    };
    changeOption();
  });

  /** ---------- Ecoute les options et à chaque pression de la touche ENTER modifie l'option de tri ---------- */
  newOption.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const changeOption = () => {
        for (let option of selectElt.options) {
          if (option.innerHTML === this.innerHTML) {
            selectElt.selectedIndex = option.index;
            listboxCustomtNew.innerHTML = this.innerHTML;
          }
        }
        listboxCustomtNew.click();
      };
      changeOption();
    }
  });

  /** ---------- On rattache les options à la nouvelle listbox ---------- */
  newMenu.appendChild(newOption);
}

/** ---------- On rattache la liste déroulante à la listbox ---------- */
listboxCustom.appendChild(newMenu);

/** ---------- Ecoute les options et à chaque pression de la touche ENTER modifie l'option de tri ---------- */
listboxCustomtNew.addEventListener("click", function (e) {
  /** On empèche la propagation du clic */
  e.stopPropagation();
  /** On retire le "select-hide" de notre liste déroulante */
  this.nextSibling.classList.toggle("select-hide"); // toggle = recherche la chaine de caractère et si présente, il retire)
  /** Ajoute la class "active" sur l'option selectionnée */
  this.classList.toggle("active");
  photographGaleryDisplay();
});

/** ---------- Ecoute les options et à chaque pression de la touche ENTER modifie l'option de tri ---------- */
listboxCustomtNew.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.stopPropagation();
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("active");
    photographGaleryDisplay();
  }
});

/** ---------- Tri la galerie des médias par titre ---------- */
function sortMediaByTitle(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
}

/** ---------- Tri la galerie des médias par le nombre de like ---------- */
function sortMediaByLikes(a, b) {
  return b.likes - a.likes;
}

/** ---------- Tri la galerie des médias par leur date ---------- */
function sortMediaByDate(a, b) {
  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
  return 0;
}
