
// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

// 1. Récupère tes éléments du DOM

const inputBox = document.querySelector(".inputChampion");
const submitBtn = document.querySelector(".btnAjouter");
const displayBox = document.querySelector(".message"); 
const favouritesList = document.querySelector('.listeFavoris');

// =================================
// 🧠 2. Variables globales / état
// =================================

const favoris = ["Darius", "Ahri", "Thresh"];

let champion = inputBox.value;

// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

//2. Crée une fonction d'affichage pour les champions déjà présents et affiche les dans .liste-favoris

// function displayResult (result, myDisplay) {
//    inputBox.value = "";
//    inputBox.focus();
//    favouritesList.innerHTML = "";
//    return myDisplay.innerHTML += `${result} - Nombre de champions : ${favoris.length} `;
// }


function displayResult() {
   
  favouritesList.innerHTML = "";
  displayBox.innerHTML = "";
   
   for (let i = 0; i < favoris.length;  i++) {
      
      const favouritesList = document.createElement('li');
      displayBox.appendChild(favouritesList);
      favouritesList.innerHTML += favoris[i];
   }
}

// 3. Crée une fonction pour ajouter des champions au tableau déjà existant

function addChampion (champion, favoris) {
   favoris.push(champion);
}


// =================================
// 🧲 4. Événements (interactions)
// =================================


submitBtn.addEventListener('click', () => {
   
   let champion = inputBox.value;
   
   // displayResult(favoris, favouritesList);

   addChampion(champion, favoris);
   displayResult();
});

