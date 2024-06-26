import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class AccueilUtilisateurComponent {

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('_id');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}


