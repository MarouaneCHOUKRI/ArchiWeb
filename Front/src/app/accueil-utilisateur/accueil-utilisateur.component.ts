import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-utilisateur',
  templateUrl: './accueil-utilisateur.component.html',
  styleUrls: ['./accueil-utilisateur.component.css']
})
export class AccueilUtilisateurComponent {

  nom: string | null;
  prenom: string | null;

  constructor(private router: Router) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
  }

  logout(): void {
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    this.router.navigate(['/login']);
  }

}


