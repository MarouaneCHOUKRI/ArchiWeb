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

            res.send({ status: 'success', message: { nom: user.nom, prenom: user.prenom, email: user.email } });
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
