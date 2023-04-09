const db = require("../models");
const Projet = db.ArchiWeb.Projet;
const Competence = db.ArchiWeb.Competence;
const Resultat = db.ArchiWeb.Resultat;

// Créer un projet
exports.createProjet = (req, res) => {
    const projet = new Projet({
        nom: req.body.nom,
        description: req.body.description,
        competences: req.body.competences,
        enseignant: req.body.userId
    });

    projet.save()
        .then(projet => {
            res.send({ message: "Le projet a été créé avec succès !" });
        })
        .catch(err => {
            res.status(500).send({ message: err });
        });
};

// Créer une compétence
exports.createCompetence = (req, res) => {
    const competence = new Competence({
        nom: req.body.nom,
        description: req.body.description,
        enseignant: req.body.userId,
    });

    competence.save()
        .then(() => {
            res.send({ message: "La compétence a été créée avec succès !" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

// Récupérer toutes les compétences
exports.getAllCompetences = (req, res) => {
    Competence.find()
        .then((competences) => {
            res.send(competences);
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

// Récupérer toutes les compétences créer par un enseignant
exports.getCompetencesEnseignant = (req, res) => {
    const enseignantId = req.params.enseignantId;

    Competence.find({ enseignant: enseignantId })
        .then((competences) => {
            res.send(competences);
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

// Supprimer une compétence
exports.deleteCompetence = (req, res) => {
    const nomCompetence = req.body.selectCompetences;

    Competence.findOneAndDelete({ nom: nomCompetence })
        .then(competence => {
            if (!competence) {
                res.status(404).send({ message: "Compétence introuvable." });
                return;
            }

            res.send({ message: "La compétence a été supprimée avec succès !" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Consulter les résultats des étudiants
exports.getResultatsByEnseignant = async (req, res) => {
    try {
        const enseignantId = req.params.enseignantId;
        const projet = await Projet.findOne({ enseignant: enseignantId });
        const resultats = await Resultat.find({ projet: projet._id }).populate('etudiant').populate('competence');
        const resultatsAvecDetails = resultats.map(resultat => ({
            etudiant: resultat.etudiant,
            projet: projet.nom,
            competence: resultat.competence,
            niveauAcquisition: resultat.niveauAcquisition
        }));
        console.log(resultatsAvecDetails);
        res.status(200).send(resultatsAvecDetails);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Une erreur s'est produite lors de la récupération de la liste des étudiants."
        });
    }
}

