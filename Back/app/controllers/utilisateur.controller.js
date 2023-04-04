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
            res.redirect('/Login');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

//Supprimer un utilisateur
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

// Connecter un utilisateur
exports.connectUser = (req, res) => {

    const collection = Utilisateur;

    collection.findOne({ $and: [{ email: req.body.email }, { role: { $in: ["étudiant", "enseignant"] } }] })
        .then(user => {

            if (!user || !bcrypt.compareSync(req.body.password, user.motDePasse)) {
                res.status(401).json({ message: 'Erreur lors de l\'authentification' });
                return;
            }

            res.status(401).json({ message: 'Auth Réussi' });
            return;
        })
}