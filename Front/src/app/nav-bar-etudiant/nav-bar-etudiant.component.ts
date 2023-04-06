import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-etudiant',
  templateUrl: './nav-bar-etudiant.component.html',
  styleUrls: ['./nav-bar-etudiant.component.css']
})
export class NavBarEtudiantComponent {
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
