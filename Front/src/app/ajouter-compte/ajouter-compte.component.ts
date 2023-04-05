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
      motdepasse: ['', Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')],
      confirmermotdepasse: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  Add(): void {
    
    if (this.formulaire.invalid) {
      alert("Veuillez remplir tous les champs correctement");
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
