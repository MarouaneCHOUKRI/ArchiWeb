import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {
  Createformulaire!: FormGroup;
  deleteFormulaire!: FormGroup;
  competences: any[] | undefined;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    
    this.http.get<any[]>('http://localhost:8081/Competences-Enseignant/' + localStorage.getItem('_id')).subscribe(data => {
      this.competences = data;
    });

    this.Createformulaire = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      description: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      userId: localStorage.getItem('_id'),
    });

    this.deleteFormulaire = this.fb.group({
      selectCompetences: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    });
    
  }

  CreateCompetence() {
    
    const body = this.Createformulaire.value;
    this.http.post<{ status: string; message: string; }>("http://localhost:8081/Create-Competence", body)
    .pipe(
        tap(() => {
            alert("succès");
            this.router.navigate(['/accueil-enseignant']);
        }),
        catchError(error => {
            alert("échecs");
            throw error;
        })
    ).subscribe();
  }

  deleteCompetence() {
    
    const body = this.deleteFormulaire.value;
    console.log(body);
    this.http.post<{ status: string; message: string; }>('http://localhost:8081/Delete-Competence', body)
      .pipe(
        tap(data => {
          console.log(data);
          alert(data.message);
          this.router.navigate(['/accueil-enseignant']);
        }),
        catchError(error => {
          console.error('There was an error!', error);
          throw(error);
        })
      ).subscribe();
  }
}
