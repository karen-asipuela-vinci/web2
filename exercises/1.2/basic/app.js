var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var filmsRouter = require('./routes/films');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// exo : rajouter méthodes pour compter les requetes faites à API

const stats = {}; // définition d'un objet vide, où on va stocker les statistiques

//lancement du middleware Express :
app.use((req, res, next) =>{ // on ne met pas de direction pcq doit être effectué à chaque fois
    const currentOperation = `${req.method} ${req.path}`; // obtention des informations sur l'opération en cours : req.method + req.path = chaine representant l'opération en cours
    // donne une place dans la "liste".
    //on doit maintenant vérifier si l'opération en cours n'a pas déjà été rajoutée.
    const currentOperationCounter = stats[currentOperation];
        // si indéfini, il ne l'est pas donc on lance sa "case" à 0:
    if(currentOperation === undefined) stats[currentOperation] = 0;
        // puis le compteur de cette opération est incrémenté de 1 :
    stats[currentOperation] += 1;  
    // on prépare maintenant l'affichage :
    //Cette partie crée un message de statistiques en parcourant les clés de l'objet stats à l'aide de Object.keys(). 
    //Pour chaque opération, elle génère une ligne de texte indiquant le nom de l'opération et son compteur. 
    //Enfin, toutes les lignes sont jointes avec un saut de ligne (\n) :
    const statsMessage = `Request counter : \n${Object.keys(stats) //renvoie le nom de ce qu'il contient
        .map((operation) => `- ${operation} : ${stats[operation]}`)
        .join('\n')}
        `;

    //on console log :
    console.log(statsMessage);
    next(); // on continue là où on veut aller de base

});

app.use('/', filmsRouter);

module.exports = app;
