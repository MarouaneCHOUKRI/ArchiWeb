import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component'
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component'
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component'
import { ModifierInfoAdminComponent } from './modifier-info-admin/modifier-info-admin.component'
import { ModifierInfoUsersComponent } from './modifier-info-users/modifier-info-users.component'
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilAdminComponent, canActivate: [MyGuardGuard] },
  { path: 'supprimer', component: SupprimerCompteComponent, canActivate: [MyGuardGuard]},
  { path: 'ajouter', component: AjouterCompteComponent, canActivate: [MyGuardGuard]},
  { path: 'modifier-admin', component: ModifierInfoAdminComponent, canActivate: [MyGuardGuard]},
  { path: 'modifier-users', component: ModifierInfoUsersComponent, canActivate: [MyGuardGuard]},
  { path: '**', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
