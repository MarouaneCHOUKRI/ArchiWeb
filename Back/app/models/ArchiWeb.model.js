module.exports = mongoose => {
    // Définition des schémas
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
        enseignant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true, populate: true },
    });

    const competenceSchema = new mongoose.Schema({
        nom: { type: String, required: true, unique: true },
        description: { type: String },
        enseignant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true, populate: true },
    });

    const resultatSchema = new mongoose.Schema({
        etudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true, populate: true },
        projet: { type: mongoose.Schema.Types.ObjectId, ref: 'Projet', required: true, populate: true },
        competences: [{
            competence: { type: mongoose.Schema.Types.ObjectId, ref: 'Competence', required: true, populate: true },
            niveauAcquisition: { type: String, enum: ['non-acquise', 'en-cours', 'acquise'], required: true },
        }]
    });

    // Ajouter les schémas au model
    const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    }));

    const Projet = mongoose.model('Projet', projetSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    }));

    const Competence = mongoose.model('Competence', competenceSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    }));

    const Resultat = mongoose.model('Resultat', resultatSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
    }));

    return { Utilisateur, Projet, Competence, Resultat };
};
