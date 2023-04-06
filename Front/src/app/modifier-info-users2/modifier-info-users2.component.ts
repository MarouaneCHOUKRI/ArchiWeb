import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-info-users2',
  templateUrl: './modifier-info-users2.component.html',
  styleUrls: ['./modifier-info-users2.component.css']
})
export class ModifierInfoUsers2Component {
  formulaire!: FormGroup; 

  nom: string | null;
  prenom: string | null;
  email: string | null;
  motdepasse: string | null;
  role: string | null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.motdepasse = '';
    this.role = '';
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if(params['nom'] && params['prenom'] && params['email'] && params['role']){
        this.nom = params['nom'];
        this.prenom = params['prenom'];
        this.email = params['email'];
        this.role = params['role'];
      }
    });

    this.formulaire = this.fb.group({
      nom: [this.nom , [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: [this.prenom, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [this.email, [Validators.required, Validators.email]],
      motdepasse: [this.motdepasse, [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      role: [this.role, [Validators.required]],
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

    if (this.formulaire.controls['role'].invalid) {
      alert("Le rôle de l'utilisateur doît être défini.");
      return;
    }
    
    const data = this.formulaire.value;

    this.http.post("http://localhost:8081/Modifie", data)
      .subscribe(response => {
        alert('Modification Réussie.');
        this.router.navigate(['/accueil-admin']);
      }, error => {
        alert('Erreur lors de la modification.');
      });
  }
}
