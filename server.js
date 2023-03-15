const express = require("express");
const cors = require("cors");
const axios = require('axios');
const userController = require('./app/controllers/utilisateur.controller');
const db = require("./app/models");
const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.post('/users', userController.create);
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue." });
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
// Appel à une API externe avec axios
axios.post('http://localhost:8081/users')
    .then(response => {
        console.log("hello");
    })
    .catch(error => {
        console.error(error);
    });