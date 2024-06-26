import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  routes = {
    administrateur: ['/accueil-admin'],
    enseignant: ['/accueil-enseignant'],
    étudiant: ['/accueil-etudiant']
  };

  constructor(private http: HttpClient, private router: Router) { }

  login(): void {

    if (!this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
  
    this.http.post<{ status: string; message: { _id : string, nom: string; prenom: string, email: string, role: string}; }>('http://localhost:8081/Login', { email: this.email, password: this.password })
    .pipe(
      tap(response => {
        if (response.status === 'success') {
          const { _id, nom, prenom, email, role } = response.message;
          localStorage.setItem('_id', _id);
          localStorage.setItem('nom', nom);
          localStorage.setItem('prenom', prenom);
          localStorage.setItem('email', email);
          localStorage.setItem('role', role);
          
          if(role === "administrateur"){
            this.router.navigate(['/accueil-admin']);
          }
          
          if(role === "enseignant"){
            this.router.navigate(['/accueil-enseignant']);
          }

          if(role === "étudiant"){
            this.router.navigate(['/accueil-etudiant']);
          }

        } else {
          alert(response.message);
        }
      }),
      catchError(error => {
        console.error(error);
        alert('Erreur lors de la connexion');
        throw error;
      })
    )
    .subscribe();
  } 
}
