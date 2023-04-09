const db = require("../models");
const Resultat = db.ArchiWeb.Resultat;
const Projet = db.ArchiWeb.Projet;

// Obtenire tout les projets ou l'étudiant n'est pas inscrit
exports.getProjets = (req, res, next) => {
    const etudiantId = req.params.etudiantId;

    Resultat.find({ etudiant: etudiantId })
        .populate('projet', 'nom description enseignant')
        .then(resultats => {
            const projets = Projet.find({ _id: { $nin: resultats.map(r => r.projet) } })
                .populate('enseignant', 'nom prenom')
                .populate('competences', 'nom');

            return projets;
        })
        .then(projets => {
            res.status(200).json(projets);
        })
        .catch(error => {
            next(error);
        });
};

// Inscrire dans la table résultat
exports.inscrireProjet = async (req, res, next) => {
    const etudiantId = req.body.etudiantId;
    const projetId = req.body.projetId;
    const competenceId = req.body.competenceId;

    try {
        const resultat = new Resultat({
            etudiant: etudiantId,
            projet: projetId,
            competence: competenceId,
            niveauAcquisition: 'non-acquise'
        });
        await resultat.save();
        res.status(200).json(resultat);
    } catch (error) {
        next(error);
    }
};





