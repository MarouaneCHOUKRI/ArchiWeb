import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouterProjetComponent implements OnInit {

  competences: any[] | undefined;
  projetForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/Competences').subscribe(data => {
      this.competences = data;
    });

    this.projetForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      competences: [[], Validators.required]
    });
  }

  Add() {
    const projet = {
      nom: this.projetForm.value.nom,
      description: this.projetForm.value.description,
      competences: this.projetForm.value.competences,
      userId: localStorage.getItem('_id')
    };

    this.http.post('http://localhost:8081/Create-Projet', projet)
    .pipe(
      tap(res => {
        alert("Le projet a été créé avec succès !");
        this.router.navigate(['/accueil-enseignant']);
        }
      ),
      catchError(err => {
        alert("dcdc");
        throw (err);
      })
    )
    .subscribe();

  }
}