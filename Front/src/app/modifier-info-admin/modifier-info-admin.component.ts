import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-info-admin',
  templateUrl: './modifier-info-admin.component.html',
  styleUrls: ['./modifier-info-admin.component.css']
})
export class ModifierInfoAdminComponent {

  nom: string | null;
  prenom: string | null;
  email: string | null;

  constructor(private router: Router) {
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.email = localStorage.getItem('email');
  }
}
