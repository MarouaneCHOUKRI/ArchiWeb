import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.css']
})
export class AjouterCompteComponent implements OnInit {
  formulaire!: FormGroup;

  nom: string | null;
  prenom: string | null;
  email: string | null;
  motdepasse: string | null;
  confirmermotdepasse: string | null;
  role: string | null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.motdepasse = '';
    this.confirmermotdepasse = '';
    this.role = '';
   }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$')]],
      confirmermotdepasse: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$')]],
      role: ['', [Validators.required]]
    });
  }

  Add(): void {
    
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
    

    if (this.formulaire.value.motdepasse !== this.formulaire.value.confirmermotdepasse) {
      alert("Les deux mots de passe doivent être identiques");
      return;
    }

    // if (this.formulaire.controls['motdepasse'].invalid) {
    //   alert("Le mot de passe est obligatoire et doit contenir au moins 8 caractères, y compris une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
    //   return;
    // }

    // if (this.formulaire.controls['confirmermotdepasse'].invalid) {
    //   alert("La confiramation du mot de passe est obligatoire et doit contenir au moins 8 caractères, y compris une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
    //   return;
    // }

    if (this.formulaire.controls['role'].invalid) {
      alert("Le rôle de l'utilisateur doît être défini.");
      return;
    }

    const data = this.formulaire.value;

    this.http.post<{ status: string; message: string; }>("http://localhost:8081/Create", data)
    .pipe(
        tap(response => {
            if (response.status === 'success') {
                alert('Utilisateur ajouté avec succès.');
                this.router.navigate(['/accueil-admin']);
            } else {
                alert('Impossible d\'ajouter cet utilisateur.');
            }
        }),
        catchError(error => {
            console.error(error);
            alert('Erreur lors de la connexion');
            throw error;
        })
    ).subscribe();

  }
}
