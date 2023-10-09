
function addDateTime(message){
    const dateTimeNow = new Date();
    const formattedDate = dateTimeNow.toLocaleDateString();
    const formattedTime = dateTimeNow.toLocaleTimeString();
    const dateTimeMessage = `${formattedDate} ${formattedTime} : ${message}`;
    alert(dateTimeMessage); // Affiche une alerte (popup)
    console.log(dateTimeMessage); // Affiche le message dans la console
} 

// Appeler la fonction au chargement de la page
window.addEventListener('load', function () {
    const message = "This is the best moment to have a look at this website!";
    addDateTime(message);
});