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
  destinataire = "clement.salomon@etu.univ-amu.fr";
  destinataire_2 = "mathis.louarn@etu.univ-amu.fr";
  sujet_message = "Avis sur le site du jeu de la vie";
  contenu_message = "Aucun Message";
  contenu_message = document.getElementById("message").value;
  window.open("mailto:"+destinataire+'?cc='+destinataire_2+'&subject='+sujet_message+'&body='+contenu_message);
}
