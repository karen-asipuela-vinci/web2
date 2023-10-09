// Sélectionner l'élément qui affichera le compteur de clics
const clickCounterElement = document.querySelector('#click-counter');
const messageElement = document.querySelector('#message');

let clickCount = 0;

// Fonction pour mettre à jour le compteur de clics et afficher le message approprié
function updateClickCounter() {
    clickCount++; // on somme le click
    clickCounterElement.textContent = `Clics : ${clickCount}`; // on écrit le "schéma" du texte

    // Afficher le message en fonction du nombre de clics
    if (clickCount >= 5 && clickCount <= 9) { //il faut mettre la 2e condition sinon ne passe jamais à la suite
        messageElement.textContent = 'Bravo, bel échauffement !'
    } else if (clickCount >= 10) {
        messageElement.textContent = "Vous êtes passé maître en l'art du clic !";
    }
}

// Ajoutez un gestionnaire d'événements de clic à la fenêtre
window.addEventListener('click', updateClickCounter);
