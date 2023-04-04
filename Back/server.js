const express = require("express");
const session = require('express-session');
const cors = require("cors");
const userController = require('./app/controllers/utilisateur.controller');
const db = require("./app/models");
const app = express();
const path = require('path');

app.use(cors({ origin: "http://localhost:8081" }));
app.use(session({ secret: 'a8516890dfb80f99c5b4c6a28aaef30ca580c7ee439c44bdbbe79022', resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Front/src/')));

//Routes
app.post('/Create', userController.createUser);
app.post('/Delete', userController.deleteUser);
app.post('/Login', userController.connectUser);

// Déconnexion
app.post('/logout', (req, res) => {
    req.session.destroy();
});


// Page Accueil
app.get('/accueil', function (req, res) {
    if (req.session.isauthenticated) {
        res.send({ user: req.session.username });
    } else {
        res.redirect('/Login');
    }
});

// Ajouter un utilisateur - Accessible que par l'administrateur
app.get('/ajouter', function (req, res) {
    if (req.session.role === 'administrateur') {
        res.sendFile(path.join(__dirname, '../Front/src/app/ajouter-compte/ajouter-compte.component.html'));
    } else {
        res.redirect('/Login');
    }
});

// Supprimer un utilisateur - Accessible que par l'administrateur
app.get('/supprimer', function (req, res) {
    if (req.session.role === 'administrateur') {
        res.sendFile(path.join(__dirname, '../Front/src/app/supprimer-compte/supprimer-compte.component.html'));
    } else {
        res.redirect('/Login');
    }
});

// Page de login
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../Front/src/app/login/login.component.html'));
});



// Connexion à la base de données
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// Démarrage du serveur
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});