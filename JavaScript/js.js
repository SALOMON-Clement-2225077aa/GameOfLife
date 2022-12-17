// Ce fichier contient les fonctions JavaScript suivantes :
// - topFunction() : permet de remonter tout en haut de la page actuelle en cliquant sur le bouton "⇧" en bas à droite de chaque page.
// - dark() : permet d'activer ou de désactiver le mode sombre en cliquant sur le switch en bas à gauche de chaque page.
// - mail() : permet d'envoyer le formulaire de la page en cliquant sur le bouton "envoyer" sur la page formulaire.


// Fonction qui s'active avec le bouton "⇧" en bas à droite de chauqe page.
// Permet de remonter tout en haut de la page actuelle.
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Fonction qui s'active ou se désactive avec le switch en bas à gauche de chauqe page.
// Il permet d'activer ou de désactiver le mode sombre.
function dark(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Fonction qui s'active avec le bouton "envoyer" de la page formulaire.
// Il permet comme son nom l'indique d'envoyer le formulaire.
function mail(){
  var message = document.querySelector("#" + form_id_js + " [name='text']").value;
  data_js['text'] = message;
  window.open('mailto:clement.salomon@etu.univ-amu.fr?subject=Avis sur le site du jeu de la vie&body='+message);
}
