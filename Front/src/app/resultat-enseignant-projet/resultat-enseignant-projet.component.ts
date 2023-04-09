import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-resultat-enseignant-projet',
templateUrl: './resultat-enseignant-projet.component.html',
styleUrls: ['./resultat-enseignant-projet.component.css']
})
export class ResultatEnseignantProjetComponent {
  resultats: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/Consulter/' + localStorage.getItem('_id')).subscribe(data => {
      console.log(data);
      this.resultats = data;
    });
  }
}
