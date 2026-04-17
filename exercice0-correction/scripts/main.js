// =================================
// 🌱 1. Sélection des éléments DOM
// =================================
const inputChampion = document.querySelector('.inputChampion'),
      addBtn = document.querySelector('.btnAjouter'),
      message = document.querySelector('.message'),
      listeChampions = document.querySelector('.liste-favoris');
// =================================
// 🧠 2. Variables globales / état
// =================================
const champions = ["Darius", "Ahri", "Thresh"];
// =================================
// 🎊 3. Fonctions (logique métier)
// =================================
// Fonction pour afficher tous les héros
function displayAllHeroes(tableauHeros) {
  listeChampions.textContent="";
  for (let i = 0; i < tableauHeros.length; i++) {
    const myLi = document.createElement('li');
    myLi.textContent = tableauHeros[i];
    listeChampions.appendChild(myLi);
  }
}
// Fonction pour ajouter un héro
function addHero(nomHero, tableauDeHeros) {
  tableauDeHeros.push(nomHero);
}
// Fonction pour afficher le dernier héro
function displayLastHero(tableauHero) {
  const myLi = document.createElement('li');
  myLi.textContent = tableauHero[tableauHero.length-1];
  listeChampions.appendChild(myLi); 
}
// Fonction de remise à 0 du champ
function reset(input) {
  input.value="";
  input.focus();
}

// =================================
// 🧲 4. Événements (interactions)
// =================================

// On affiche tous les héros
displayAllHeroes(champions);

// Au click sur le bouton d'ajout ... 
addBtn.addEventListener('click', function() {
  // On récupère la valeur de l'input
  const newChampion = inputChampion.value;
  // On test si c'est vide et si c'est le cas on arrête tout 
  if (newChampion === "") {
    message.textContent = "Veuillez entrer un champion";
    return;
  }
  // On vide cette boite à message (si jamais il y avait eu une erreur avant)
  message.textContent="";

  // On lance toutes les fonctions ... 
  addHero(newChampion, champions);
  displayLastHero(champions);
  reset(inputChampion);
});