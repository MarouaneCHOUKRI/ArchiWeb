const db = require("../models");
const bcrypt = require('bcrypt');
const Utilisateur = db.ArchiWeb.Utilisateur;

//Ajouter un utilisateur
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

    Utilisateur.findOneAndRemove({ email: req.body.email })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Impossible de supprimer l'utilisateur avec l'email ${req.body.email}. L'utilisateur n'a pas été trouvé.`
                });
            } else {
                res.send({
                    message: "L'utilisateur a été supprimé avec succès !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Impossible de supprimer l'utilisateur avec l'email " + req.body.email
            });
        });
};

// Connecter un utilisateur
exports.connectUser = (req, res) => {

    const collection = Utilisateur;

    collection.findOne({ $and: [{ email: req.body.email }] })
        .then(user => {
            if (!user || !bcrypt.compareSync(req.body.password, user.motDePasse)) {
                res.redirect('/Login');
                return;
            }

            req.session.userId = user._id;
            req.session.role = user.role;
            req.session.username = user.prenom + " " + user.nom;
            req.session.isauthenticated = true;

            res.redirect('/accueil');
            return;
        })
}