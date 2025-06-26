
var heading = document.querySelector('.swiper-slide .content h3');

var texts = [
  "Découvrez notre programme de Licence en Ingénierie Informatique.",
  "Formez-vous à l'excellence avec notre Licence en Ingénierie Informatique.",
  "Explorez les opportunités infinies avec notre Licence en Ingénierie Informatique.",
  "Donnez un élan à votre carrière avec notre Licence en Ingénierie Informatique.",
  "Préparez-vous à l'avenir de la technologie avec notre Licence en Ingénierie Informatique."
];

var transitionSpeed = 100; 

function animateHeading() {
  var textIndex = 0;

  function changeTextWithAnimation() {
    var currentText = texts[textIndex];
    var currentLength = 0;

    heading.textContent = '';

    function displayLetters() {
      if (currentLength <= currentText.length) {
        heading.textContent = currentText.slice(0, currentLength);
        currentLength++;
        setTimeout(displayLetters, transitionSpeed);
      } else {
        setTimeout(changeTextWithAnimation, transitionSpeed);
      }
    }

    displayLetters();

    textIndex = (textIndex + 1) % texts.length;
  }

  changeTextWithAnimation();
}

animateHeading();

const btn = document.querySelector('.up');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

// On parcours chaque section
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

var titreH2 = document.querySelector("h2");

// On cree une animation avec GSAP
gsap.from(titreH2, { duration: 1, rotation: 360 });