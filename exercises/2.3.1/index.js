document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les éléments du formulaire et du texte :
    const wishForm = document.querySelector('.wishForm');
    const wishInput = document.querySelector('.wishText');
    const submittedWishContainer = document.querySelector('.submittedWishContainer');
    const submittedWish = document.querySelector('.submittedWish');

    // Ajouter l'événement avec la fonction pour le submit du formulaire :
    wishForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const userWish = wishInput.value;
        submittedWish.textContent = userWish;
        submittedWishContainer.style.display = 'block';

        // faire disparaitre le form avec display:none
        wishForm.style.display = 'none';
    });
});
