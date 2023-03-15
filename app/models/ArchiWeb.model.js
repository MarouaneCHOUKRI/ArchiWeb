module.exports = mongoose => {
    const utilisateurSchema = new mongoose.Schema({
        nom: { type: String, required: true },
        prenom: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        motDePasse: { type: String, required: true },
        role: { type: String, enum: ['administrateur', 'enseignant', 'étudiant'], required: true },
    });

    const projetSchema = new mongoose.Schema({
        nom: { type: String, required: true },
        description: { type: String, required: true },
        competences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Competence' }],
        enseignant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
    });

    const competenceSchema = new mongoose.Schema({
        nom: { type: String, required: true },
        description: { type: String },
    });

    const resultatSchema = new mongoose.Schema({
        etudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
        projet: { type: mongoose.Schema.Types.ObjectId, ref: 'Projet' },
        competence: { type: mongoose.Schema.Types.ObjectId, ref: 'Competence' },
        niveauAcquisition: { type: String, enum: ['non-acquise', 'en-cours', 'acquise'] },
    });

    const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
    const Projet = mongoose.model('Projet', projetSchema);
    const Competence = mongoose.model('Competence', competenceSchema);
    const Resultat = mongoose.model('Resultat', resultatSchema);

    return { Utilisateur, Projet, Competence, Resultat };
};