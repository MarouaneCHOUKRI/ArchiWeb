import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilUtilisateurComponent } from './accueil-utilisateur/accueil-utilisateur.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilUtilisateurComponent },
  { path: 'ajouter', component: AjouterCompteComponent },
  { path: 'supprimer', component: SupprimerCompteComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
