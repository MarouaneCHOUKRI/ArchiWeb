import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etudiant-projet',
  templateUrl: './etudiant-projet.component.html',
  styleUrls: ['./etudiant-projet.component.css']
})
export class EtudiantProjetComponent {
  resultats: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:8081/Resultat-etudiant/' + localStorage.getItem('_id')).subscribe(data => {
        this.resultats = data;
        console.log(this.resultats);
      });
  }
}