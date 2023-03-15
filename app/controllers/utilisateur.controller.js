const db = require("../models");
const bcrypt = require('bcrypt');
const Utilisateur = db.ArchiWeb.Utilisateur;

//ajouter un utilisateur
exports.createUser = (req, res) => {
    const password_hash = bcrypt.hashSync('csdcdscdcdfvdf', 10);
    const utilisateur = new Utilisateur({
        nom: "jhg",
        prenom: "hu",
        email: "jkhj",
        motDePasse: password_hash,
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
// Supprimer un utilisateur
exports.deleteUser = (req, res) => {
    const id = "6412062ff9462578eef1bc7c";

    Utilisateur.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Impossible de supprimer l'utilisateur avec l'id=${id}. L'utilisateur n'a pas été trouvé.`
                });
            } else {
                res.send({
                    message: "L'utilisateur a été supprimé avec succès !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Impossible de supprimer l'utilisateur avec l'id=" + id
            });
        });
};