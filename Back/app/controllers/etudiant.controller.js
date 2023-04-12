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
    const competences = req.body.competenceIds;

    try {
        const resultat = new Resultat({
            etudiant: etudiantId,
            projet: projetId,
            competences: competences.map(c => ({
                competence: c._id,
                niveauAcquisition: 'non-acquise'
            }))
        });
        await resultat.save();
        res.status(200).json(resultat);
    } catch (error) {
        next(error);
    }
};

// Récupérer tous les résultats en fonction de l'ID étudiant
exports.getResultatsByEtudiantId = (req, res, next) => {
    const etudiantId = req.params.etudiantId;

    Resultat.find({ etudiant: etudiantId })
        .populate('projet', 'nom description enseignant')
        .populate('etudiant', 'nom prenom email')
        .then(resultats => {
            console.log(resultats);
            res.status(200).json(resultats);
        })
        .catch(error => {
            next(error);
        });
};



