import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-projet',
  templateUrl: './inscription-projet.component.html',
  styleUrls: ['./inscription-projet.component.css']
})
export class InscriptionProjetComponent {

  projet: any[] | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/Projet/' + localStorage.getItem('_id')).subscribe(data => {
      this.projet = data;
    });
  }

  inscrireProjet(projet: any) {
    const etudiantId = localStorage.getItem('_id');
    const projetId = projet.id;
    const competenceIds = projet.competences;

    competenceIds.forEach((competenceId: any) => {
      this.http.post<any>('http://localhost:8081/Inscription-projet', { etudiantId, projetId, competenceId }).subscribe(resultat => {
        this.router.navigate(['/accueil-etudiant']);
      });
    });
  }

}
