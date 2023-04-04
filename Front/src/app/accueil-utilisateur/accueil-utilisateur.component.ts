import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-accueil-utilisateur',
  templateUrl: './accueil-utilisateur.component.html',
  styleUrls: ['./accueil-utilisateur.component.css']
})
export class AccueilUtilisateurComponent {

  user: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:8081/Accueil').subscribe((data: any) => {
      this.user = data.user;
    });
  }

}


