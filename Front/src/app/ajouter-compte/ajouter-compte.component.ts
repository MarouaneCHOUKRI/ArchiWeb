import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.css']
})
export class AjouterCompteComponent implements OnInit {
  formulaire!: FormGroup;

  nom = '';
  prenom = '';
  email = '';
  motdepasse = '';
  confirmermotdepasse = '';
  role = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      nom: ['', Validators.required, Validators.pattern('^[a-zA-Z]+$')],
      prenom: ['', Validators.required, Validators.pattern('^[a-zA-Z]+$')],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9!@#\$%\^&\*]+$')
    ],
      confirmermotdepasse: ['', Validators.required],
      role: ['', Validators.required]
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
    
    if (this.formulaire.controls['motdepasse'].invalid) {
      alert("Le mot de passe doit contenir au moins 8 caractères, y compris une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
      return;
    }

    if (this.formulaire.controls['role'].invalid) {
      alert("Le rôle de l'utilisateur doît être défini.");
      return;
    }

    if (this.formulaire.value.motdepasse !== this.formulaire.value.confirmermotdepasse) {
      alert("Les deux mots de passe doivent être identiques");
      return;
    }

    const data = this.formulaire.value;

    this.http.post("http://localhost:8081/Create", data)
      .subscribe(response => {
        alert('Response:' + response);
        this.router.navigate(['/accueil']);
      }, error => {
        alert('Error:' + error);
      });
  }
}
