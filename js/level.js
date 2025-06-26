document.addEventListener("DOMContentLoaded", function() {
    
    var form = document.getElementById("form");

    form.style.display = "none";
    
    var toggleFormButton = document.getElementById("toggle-form");

    toggleFormButton.addEventListener("click", function() {
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });

    // Ajout d'un gestionnaire d'événement à la soumission du formulaire
    // Pour l1
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nomEnseignementInput = document.getElementById("nom-enseignement");
        var descriptionEnseignementInput = document.getElementById("description-enseignement");
        var nomError = document.getElementById("nom-error");
        var descriptionError = document.getElementById("description-error");

        var nomEnseignement = nomEnseignementInput.value.trim();
        var descriptionEnseignement = descriptionEnseignementInput.value.trim();
        var isValid = true;

        if (nomEnseignement === "") {
            nomError.textContent = "Ce champ (Nom) est obligatoire.";
            isValid = false;
        } else if (nomEnseignement.length < 8 || nomEnseignement.length > 30) {
            nomError.textContent = "Le nom de l'enseignement doit contenir entre 8 et 30 caractères.";
            isValid = false;
        } else {
            nomError.textContent = "";
        }

        if (descriptionEnseignement === "") {
            descriptionError.textContent = "Ce champ (Description) est obligatoire.";
            isValid = false;
        } else if (descriptionEnseignement.length < 50) {
            descriptionError.textContent = "La description de l'enseignement doit contenir au moins 50 caractères.";
            isValid = false;
        } else {
            descriptionError.textContent = "";
        }

        if (isValid) {
            var newRow = document.createElement("tr");

            var nomCell = document.createElement("td");
            nomCell.textContent = nomEnseignement;

            var descriptionCell = document.createElement("td");
            descriptionCell.textContent = descriptionEnseignement;

            newRow.appendChild(nomCell);
            newRow.appendChild(descriptionCell);

            var tbody = document.querySelector("#enseignements table tbody");

            tbody.appendChild(newRow);

            form.reset();

            form.style.display = "none";
        }
    });
});

//Pour le formulaire des enseignements de la l2
document.addEventListener("DOMContentLoaded", function() {
    // Sélection du formulaire
    var form = document.getElementById("form2");

    // Cacher le formulaire initialement
    form.style.display = "none";
    
    // Sélection du bouton pour afficher/cacher le formulaire
    var toggleFormButton = document.getElementById("toggle-form2");

    // Ajout d'un gestionnaire d'événement au clic sur le bouton
    toggleFormButton.addEventListener("click", function() {
        // Si le formulaire est actuellement caché, le montrer ; sinon, le cacher
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });

    // Ajout d'un gestionnaire d'événement à la soumission du formulaire
    form.addEventListener("submit", function(event) {
        
        event.preventDefault();

        var nomEnseignementInput = document.getElementById("nom-enseignement2");
        var descriptionEnseignementInput = document.getElementById("description-enseignement2");
        var nomError = document.getElementById("nom-error2");
        var descriptionError = document.getElementById("description-error2");

        var nomEnseignement = nomEnseignementInput.value.trim();
        var descriptionEnseignement = descriptionEnseignementInput.value.trim();
        var isValid = true;

        if (nomEnseignement === "") {
            nomError.textContent = "Ce champ (Nom) est obligatoire.";
            isValid = false;
        } else if (nomEnseignement.length < 8 || nomEnseignement.length > 30) {
            nomError.textContent = "Le nom de l'enseignement doit contenir entre 8 et 30 caractères.";
            isValid = false;
        } else {
            nomError.textContent = "";
        }

        if (descriptionEnseignement === "") {
            descriptionError.textContent = "Ce champ (Description) est obligatoire.";
            isValid = false;
        } else if (descriptionEnseignement.length < 50) {
            descriptionError.textContent = "La description de l'enseignement doit contenir au moins 50 caractères.";
            isValid = false;
        } else {
            descriptionError.textContent = "";
        }

        if (isValid) {
            // On crée un nouvel élément de ligne (tr)
            var newRow = document.createElement("tr");

            // On cree les cellules (td) avec les valeurs saisies
            var nomCell = document.createElement("td");
            nomCell.textContent = nomEnseignement;

            var descriptionCell = document.createElement("td");
            descriptionCell.textContent = descriptionEnseignement;

            // Ajout des cellules à la nouvelle ligne
            newRow.appendChild(nomCell);
            newRow.appendChild(descriptionCell);

            // Sélection du corps du tableau
            var tbody = document.querySelector("#enseignements2 table tbody");

            // Ajout de la nouvelle ligne au tableau
            tbody.appendChild(newRow);

            // Reinitialise les champs du formulaire
            form.reset();

            // Cacher le formulaire après l'ajout
            form.style.display = "none";
        }
    });
});

//Pour le formulaire des ensignements de la l3
document.addEventListener("DOMContentLoaded", function() {
    // Sélection du formulaire
    var form = document.querySelector(".form3");

    // Cacher le formulaire initialement
    form.style.display = "none";
    
    // Sélection du bouton pour afficher/cacher le formulaire
    var toggleFormButton = document.getElementById("toggle-form3");

    // Ajout d'un gestionnaire d'événement au clic sur le bouton
    toggleFormButton.addEventListener("click", function() {
        // Si le formulaire est actuellement caché, on le montrer ; sinon, le cacher
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });

    // Ajout d'un gestionnaire d'événement à la soumission du formulaire
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nomEnseignementInput = document.getElementById("nom-enseignement3");
        var descriptionEnseignementInput = document.getElementById("description-enseignement3");
        var nomError = document.getElementById("nom-error3");
        var descriptionError = document.getElementById("description-error3");

        var nomEnseignement = nomEnseignementInput.value.trim();
        var descriptionEnseignement = descriptionEnseignementInput.value.trim();
        var isValid = true;

        if (nomEnseignement === "") {
            nomError.textContent = "Ce champ (Nom) est obligatoire.";
            isValid = false;
        } else if (nomEnseignement.length < 8 || nomEnseignement.length > 30) {
            nomError.textContent = "Le nom de l'enseignement doit contenir entre 8 et 30 caractères.";
            isValid = false;
        } else {
            nomError.textContent = "";
        }

        if (descriptionEnseignement === "") {
            descriptionError.textContent = "Ce champ (Description) est obligatoire.";
            isValid = false;
        } else if (descriptionEnseignement.length < 50) {
            descriptionError.textContent = "La description de l'enseignement doit contenir au moins 50 caractères.";
            isValid = false;
        } else {
            descriptionError.textContent = "";
        }

        if (isValid) {
            // On cree un nouvel élément de ligne (tr)
            var newRow = document.createElement("tr");

            // On cree les cellules (td) avec les valeurs saisies
            var nomCell = document.createElement("td");
            nomCell.textContent = nomEnseignement;

            var descriptionCell = document.createElement("td");
            descriptionCell.textContent = descriptionEnseignement;

            // Ajout les cellules à la nouvelle ligne
            newRow.appendChild(nomCell);
            newRow.appendChild(descriptionCell);

            // Sélection du  corps du tableau
            var tbody = document.querySelector("#enseignements3 table tbody");

            // Ajout de la nouvelle ligne au tableau
            tbody.appendChild(newRow);

            // Reinitialisation les champs du formulaire
            form.reset();

            // On cache le formulaire après l'ajout
            form.style.display = "none";
        }
    });
});

// Pour arrow-up
const btn = document.querySelector('.up');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

// Apparition apres chargement
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




// On cible l'élément h2
var titreH2 = document.querySelector("h2");

// On cree une animation avec GSAP
gsap.from(titreH2, { duration: 1, rotation: 360 });
