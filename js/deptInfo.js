// Fonction pour gérer le focus sur les champs d'entrée
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

// Fonction pour gérer la perte de focus sur les champs d'entrée
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// Ajout des écouteurs d'événements pour gérer le focus et la perte de focus sur les champs d'entrée
const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Fonction pour remonter vers le haut de la page avec une animation
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

// Fonction pour animer les sections lors du défilement
function animateSections() {
  document.querySelectorAll('main section').forEach(function(section) {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none none'
      }
    });
  });
}
// Fonction pour valider et soumettre le formulaire
function submitForm(event) {
  event.preventDefault();

  // Récupéreration les éléments du formulaire
  var prenomInput = document.getElementsByName("firstName")[0];
  var nomInput = document.getElementsByName("lastName")[0];
  var emailInput = document.getElementsByName("email")[0]; 
  var telInput = document.getElementsByName("phone")[0];
  var msgInput = document.getElementsByName("message")[0];

  // On recupere les éléments pour afficher les erreurs
  var prenomError = document.getElementById("Prenom-error");
  var nomError = document.getElementById("Nom-error");
  var emailError = document.getElementById("Email-error"); 
  var telError = document.getElementById("Tel-error");
  var msgError = document.getElementById("Msg-error");

  // Récupéreration les valeurs des champs du formulaire
  var prenom = prenomInput.value.trim();
  var nom = nomInput.value.trim();
  var email = emailInput.value.trim(); 
  var tel = telInput.value.trim();
  var msg = msgInput.value.trim();
  
  var isValid = true;

  // Validation des champs
  if (prenom === "") {
      prenomError.textContent = "Ce champ (Prénom) est obligatoire.";
      isValid = false;
  } else if (prenom.length < 2 || prenom.length > 30) {
      prenomError.textContent = "Le prénom doit contenir entre 2 et 30 caractères.";
      isValid = false;
  } else {
      prenomError.textContent = "";
  }

  if (nom === "") {
      nomError.textContent = "Ce champ (Nom) est obligatoire.";
      isValid = false;
  } else if (nom.length < 2) {
      nomError.textContent = "Le nom doit contenir au moins 2 caractères.";
      isValid = false;
  } else {
      nomError.textContent = "";
  }

  if (email === "") {
      emailError.textContent = "Ce champ (Email) est obligatoire.";
      isValid = false;
  } else if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email)) {
      emailError.textContent = "L'email doit suivre le format correct (texte@texte.texte).";
      isValid = false;
  } else {
      emailError.textContent = "";
  }

  if (tel === "") {
      telError.textContent = "Ce champ (Téléphone) est obligatoire.";
      isValid = false;
  } else if (!/^\d{2} \d{3} \d{2} \d{2}$/.test(tel)) {
      telError.textContent = "Le téléphone doit respecter le format téléphonique au Sénégal comportant 9 chiffres (Exemple : 77 867 34 44).";
      isValid = false;
  } else {
      telError.textContent = "";
  }

  if (msg === "") {
    msgError.textContent = "Ce champ (Message) est obligatoire.";
    isValid = false;
  } else if (msg.length > 10) {
    msgError.textContent = "Le Message doit contenir au maximum 10 caractères.";
    isValid = false;
  } else {
    msgError.textContent = "";
  }

  if (isValid) {
      // Réinitialisation le formulaire
      event.target.reset();
  }
}


// Fonction pour valider le formulaire avant la soumission
function validateForm() {
  var isValid = submitForm();

  return isValid;
}

// Ajout de l'écouteur d'événement pour la soumission du formulaire
const form = document.forms.contactForm;
form.addEventListener("submit", submitForm);

// Ajout de l'écouteur d'événement pour le bouton de remontée en haut de page
const btn = document.querySelector('.up');
btn.addEventListener('click', scrollToTop);

// Appel de la fonction pour animer les sections lors du chargement de la page
animateSections();


var titreH2 = document.querySelector("h2");

// On cree une animation avec GSAP
gsap.from(titreH2, { duration: 1, rotation: 360 });