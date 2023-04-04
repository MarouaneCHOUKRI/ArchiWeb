import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './Ajouter/inscription.component';
import { LoginComponent } from './login/login.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component';
import { AccueilUtilisateurComponent } from './accueil-utilisateur/accueil-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    AjouterCompteComponent,
    SupprimerCompteComponent,
    AccueilUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }