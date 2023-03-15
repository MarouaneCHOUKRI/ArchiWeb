const db = require("../models");
const bcrypt = require('bcrypt');
const Utilisateur = db.ArchiWeb.Utilisateur;

//ajouter un utilisateur
exports.createUser = (req, res) => {
    const utilisateur = new Utilisateur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        motDePasse: bcrypt.hashSync(req.body.motdepasse, 10),
        role: req.body.role,
    });

    utilisateur
        .save()
        .then(data => {
            res.sendFile(path.join(__dirname, '../../../Front/src/index.html'));
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
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