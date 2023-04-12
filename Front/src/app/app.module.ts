import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component';
import { AccueilUtilisateurComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifierInfoComponent } from './modifier-info/modifier-info.component';
import { ModifierInfoUsersComponent } from './modifier-info-users/modifier-info-users.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ModifierInfoUsers2Component } from './modifier-info-users2/modifier-info-users2.component';
import { AccueilEnseignantComponent } from './accueil-enseignant/accueil-enseignant.component';
import { NavBarEnseignantComponent } from './nav-bar-enseignant/nav-bar-enseignant.component';
import { AccueilEtudiantComponent } from './accueil-etudiant/accueil-etudiant.component';
import { NavBarEtudiantComponent } from './nav-bar-etudiant/nav-bar-etudiant.component';
import { AjouterProjetComponent } from './ajouter-projet/ajouter-projet.component';
import { CompetenceComponent } from './competence/competence.component';
import { InscriptionProjetComponent } from './inscription-projet/inscription-projet.component';
import { ResultatEnseignantProjetComponent } from './resultat-enseignant-projet/resultat-enseignant-projet.component';
import { EtudiantProjetComponent } from './etudiant-projet/etudiant-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjouterCompteComponent,
    SupprimerCompteComponent,
    AccueilUtilisateurComponent,
    ModifierInfoComponent,
    ModifierInfoUsersComponent,
    AccueilAdminComponent,
    ModifierInfoUsers2Component,
    AccueilEnseignantComponent,
    NavBarEnseignantComponent,
    AccueilEtudiantComponent,
    NavBarEtudiantComponent,
    AjouterProjetComponent,
    CompetenceComponent,
    InscriptionProjetComponent,
    ResultatEnseignantProjetComponent,
    EtudiantProjetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
