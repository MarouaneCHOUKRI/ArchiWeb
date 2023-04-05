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
import { ModifierInfoAdminComponent } from './modifier-info-admin/modifier-info-admin.component';
import { ModifierInfoUsersComponent } from './modifier-info-users/modifier-info-users.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjouterCompteComponent,
    SupprimerCompteComponent,
    AccueilUtilisateurComponent,
    ModifierInfoAdminComponent,
    ModifierInfoUsersComponent,
    AccueilAdminComponent
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
