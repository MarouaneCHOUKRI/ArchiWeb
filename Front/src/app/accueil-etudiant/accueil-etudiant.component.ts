import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-etudiant',
  templateUrl: './accueil-etudiant.component.html',
  styleUrls: ['./accueil-etudiant.component.css']
})
export class AccueilEtudiantComponent {
  nom: string | null;
  prenom: string | null;

  constructor(private router: Router) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
  }
}
