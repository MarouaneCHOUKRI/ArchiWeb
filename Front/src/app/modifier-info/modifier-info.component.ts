import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-info',
  templateUrl: './modifier-info.component.html',
  styleUrls: ['./modifier-info.component.css']
})
export class ModifierInfoComponent {
  formulaire!: FormGroup; 

  nom: string | null;
  prenom: string | null;
  email: string | null;
  motdepasse: string | null;
  role: string | null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.email = localStorage.getItem('email');
    this.motdepasse = '';
    this.role = localStorage.getItem('role');
  }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      nom: [this.nom , [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: [this.prenom, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [this.email, [Validators.required, Validators.email]],
      motdepasse: [this.motdepasse, [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });    
  }

  Mofifie(): void {
    
    if (this.formulaire.controls['nom'].invalid) {
      alert("Le champ nom est obligatoire et doit contenir uniquement des lettres de l'alphabet.");
      return;
    }

    if (this.formulaire.controls['prenom'].invalid) {
      alert("Le champ prenom est obligatoire et doit contenir uniquement des lettres de l'alphabet.");
      return;
    }

    if (this.formulaire.controls['email'].invalid) {
      alert("Le champ email est obligatoire et doit contenir une adresse email valide.");
      return;
    }
    
    if (this.formulaire.controls['motdepasse'].invalid) {
      alert("Le mot de passe doit contenir au moins 8 caractères, y compris une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
      return;
    }
    
    const data = this.formulaire.value;
    data._id = localStorage.getItem('_id');
    this.formulaire.patchValue(data);

    this.http.post("http://localhost:8081/Modifie", data)
      .subscribe(response => {
        alert('Modification Réussie.');
        localStorage.setItem('nom', data.nom);
        localStorage.setItem('prenom', data.prenom);
        localStorage.setItem('email', data.email);

        if(this.role == "administrateur"){
          this.router.navigate(['/accueil-admin']);
        }

        if(this.role == "enseignant"){
          this.router.navigate(['/accueil-enseignant']);
        }

        if(this.role == "étudiant"){
          this.router.navigate(['/accueil-etudiant']);
        }

      }, error => {
        alert('Erreur lors de la modification.');
      });
  }
}
