import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent {
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
