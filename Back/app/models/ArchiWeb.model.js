module.exports = mongoose => {
    //Définition des schémas
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
        nom: { type: String, required: true, unique: true},
        description: { type: String },
        enseignant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
    });

    const resultatSchema = new mongoose.Schema({
        etudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
        projet: { type: mongoose.Schema.Types.ObjectId, ref: 'Projet' },
        competence: { type: mongoose.Schema.Types.ObjectId, ref: 'Competence' },
        niveauAcquisition: { type: String, enum: ['non-acquise', 'en-cours', 'acquise'] },
    });

    //Ajouter les schémas au model 
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