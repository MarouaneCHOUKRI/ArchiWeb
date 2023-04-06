import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-enseignant',
  templateUrl: './accueil-enseignant.component.html',
  styleUrls: ['./accueil-enseignant.component.css']
})
export class AccueilEnseignantComponent {
  nom: string | null;
  prenom: string | null;

  constructor(private router: Router) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
  }
}
