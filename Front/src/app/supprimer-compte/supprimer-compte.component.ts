import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supprimer-compte',
  templateUrl: './supprimer-compte.component.html',
  styleUrls: ['./supprimer-compte.component.css']
})
export class SupprimerCompteComponent {
  formulaire!: FormGroup;

  email = '';
  
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    
    this.route.queryParams.subscribe(params => {
      if(params['email']){
        this.email = params['email'];
      }
    });
  }


  Remove():void{

    if (this.formulaire.invalid) {
      alert("Veuillez remplir tous les champs correctement");
      return;
    }

    const data = this.formulaire.value;

    this.http.post("http://localhost:8081/Delete", data)
      .subscribe(response => {
        alert('Response:' + response);
        this.router.navigate(['/modifier-users']);
      }, error => {
        alert('Error:' + error);
      });
  }
}
