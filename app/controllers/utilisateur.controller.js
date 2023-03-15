const db = require("../models");
const Utilisateur = db.ArchiWeb.Utilisateur;

exports.create = (req, res) => {
    const utilisateur = new Utilisateur({
        nom: "jhg",
        prenom: "hu",
        email: "jkhj",
        motDePasse: "jhucdei",
        role: "administrateur",
    });

    utilisateur
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};