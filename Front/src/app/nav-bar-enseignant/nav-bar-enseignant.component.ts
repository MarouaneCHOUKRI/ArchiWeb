import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-enseignant',
  templateUrl: './nav-bar-enseignant.component.html',
  styleUrls: ['./nav-bar-enseignant.component.css']
})
export class NavBarEnseignantComponent {
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
