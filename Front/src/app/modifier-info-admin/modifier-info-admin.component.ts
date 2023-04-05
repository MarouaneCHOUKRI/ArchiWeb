import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-info-admin',
  templateUrl: './modifier-info-admin.component.html',
  styleUrls: ['./modifier-info-admin.component.css']
})
export class ModifierInfoAdminComponent {
  formulaire!: FormGroup;

  nom: string | null;
  prenom: string | null;
  email: string | null;
  motdepasse = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.email = localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      nom: [localStorage.getItem('nom'), [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: [localStorage.getItem('prenom'), [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [localStorage.getItem('email'), [Validators.required, Validators.email]],
      motdepasse: ['', [Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')]]
    });    
  }

  Mofifie(): void {
    
    if (this.formulaire.invalid) {
      alert("Veuillez remplir tous les champs correctement");
      return;
    }
    
    const data = this.formulaire.value;
    data._id = localStorage.getItem('_id');
    this.formulaire.patchValue(data);

    this.http.post("http://localhost:8081/Modifie", data)
      .subscribe(response => {
        this.router.navigate(['/accueil']);
        localStorage.setItem('nom', data.nom);
        localStorage.setItem('prenom', data.prenom);
        localStorage.setItem('email', data.email);
      }, error => {
        alert('Error:' + error);
      });
  }
}
