
// Chargement de expresse et du parser json 
const express = require('express');
const bodyParser = require('body-parser');

// création de l'instance
const app = express();

const fs = require('fs');
//Définition des CORS Middleware
//marche pour un envirnoment dev mais pas pour une prod car peu de sécurité
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

//  config de expresse avec le parser 
// Ecoute du json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Ecoute des routes 
const routes = require('./routes/routes.js')(app, fs);

// Lancement de l'api sur le port 3001
const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});








