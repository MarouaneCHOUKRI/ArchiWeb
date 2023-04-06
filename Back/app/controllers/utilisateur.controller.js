const db = require("../models");
const bcrypt = require('bcrypt');
const Utilisateur = db.ArchiWeb.Utilisateur;

//Ajouter un utilisateur - Soit étudiant ou enseignant
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
            res.send({ status: 'success' });
        })
        .catch(err => {
            res.send({ status: 'error' });
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
                res.send({ status: 'error', message: 'Identifiants incorrects' });
                return;
            }

            res.send({ status: 'success', message: { _id: user._id, nom: user.nom, prenom: user.prenom, email: user.email } });
            return;
        })
}

//Obtenir tous les utilisateurs - enseignant | étudiant 
exports.getAllUsers = (req, res) => {
    Utilisateur.find({ role: { $in: ['étudiant', 'enseignant'] } })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
            });
        });
};

// Modifier les informations d'un utilisateur
exports.updateUser = (req, res) => {
    const userId = req.body._id;

    Utilisateur.findById(userId)
        .then(user => {
            if (!user) {
                res.status(404).send({
                    message: `Impossible de modifier l'utilisateur avec l'ID ${userId}. L'utilisateur n'a pas été trouvé.`
                });
                return;
            }

            user.nom = req.body.nom;
            user.prenom = req.body.prenom;
            user.email = req.body.email;
            if (req.body.motdepasse) {
                user.motDePasse = bcrypt.hashSync(req.body.motdepasse, 10);
            }

            user.save()
                .then(data => {
                    res.send({ status: 'success' });
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Une erreur s'est produite lors de la modification de l'utilisateur avec l'ID " + userId
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message: "Une erreur s'est produite lors de la récupération de l'utilisateur avec l'ID " + userId
            });
        });
};
