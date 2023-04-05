import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilUtilisateurComponent } from './accueil-utilisateur/accueil-utilisateur.component'
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component'
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component'
import { ModifierInfoAdminComponent } from './modifier-info-admin/modifier-info-admin.component'
import { ModifierInfoUsersComponent } from './modifier-info-users/modifier-info-users.component'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilUtilisateurComponent },
  { path: 'supprimer', component: SupprimerCompteComponent },
  { path: 'ajouter', component: AjouterCompteComponent },
  { path: 'modifier-admin', component: ModifierInfoAdminComponent },
  { path: 'modifier-users', component: ModifierInfoUsersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
