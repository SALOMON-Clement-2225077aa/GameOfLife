
// Get the button:
let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function dark(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function mail(){
  var message = document.querySelector("#" + form_id_js + " [name='text']").value;
  data_js['text'] = message;
  window.open('mailto:clement.salomon@etu.univ-amu.fr?subject=Avis sur le site du jeu de la vie&body='+message);
}