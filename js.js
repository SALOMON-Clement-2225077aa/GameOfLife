
// Get the button:
let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Récupère les données du formulaire et les envoies par mail.
const form = document.querySelector('#form');
form.addEventListener('submit', event => {
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const gender = form.elements.gender.value;
  // Compose the email
  const subject = 'Avis laissé sur le site du jeu de la vie';
  const body = `Nom: ${name}\nEmail: ${email}\nGenre: ${gender}\n\n${message}`;
  const mailto = `mailto:clementdepertuis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Open the email client with the email pre-filled
  window.location.href = mailto;
});