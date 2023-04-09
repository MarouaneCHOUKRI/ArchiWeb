import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component'
import { AccueilEnseignantComponent } from './accueil-enseignant/accueil-enseignant.component'
import { AccueilEtudiantComponent } from './accueil-etudiant/accueil-etudiant.component'
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component'
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component'
import { ModifierInfoComponent } from './modifier-info/modifier-info.component'
import { ModifierInfoUsersComponent } from './modifier-info-users/modifier-info-users.component'
import { ModifierInfoUsers2Component } from './modifier-info-users2/modifier-info-users2.component'
import { InscriptionProjetComponent} from './inscription-projet/inscription-projet.component'
import { ResultatEnseignantProjetComponent} from './resultat-enseignant-projet/resultat-enseignant-projet.component'
import { AjouterProjetComponent } from './ajouter-projet/ajouter-projet.component'
import { CompetenceComponent } from './competence/competence.component'
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil-admin', component: AccueilAdminComponent, canActivate: [MyGuardGuard] },
  { path: 'accueil-enseignant', component: AccueilEnseignantComponent, canActivate: [MyGuardGuard] },
  { path: 'accueil-etudiant', component: AccueilEtudiantComponent, canActivate: [MyGuardGuard] },
  { path: 'ajouter-projet', component: AjouterProjetComponent, canActivate: [MyGuardGuard] },
  { path: 'inscription-projet', component: InscriptionProjetComponent, canActivate: [MyGuardGuard] },
  { path: 'competence', component: CompetenceComponent, canActivate: [MyGuardGuard] },
  { path: 'resultat-enseignant', component: ResultatEnseignantProjetComponent, canActivate: [MyGuardGuard] },
  { path: 'supprimer', component: SupprimerCompteComponent, canActivate: [MyGuardGuard]},
  { path: 'ajouter', component: AjouterCompteComponent, canActivate: [MyGuardGuard]},
  { path: 'modifier', component: ModifierInfoComponent, canActivate: [MyGuardGuard]},
  { path: 'modifier-users', component: ModifierInfoUsersComponent, canActivate: [MyGuardGuard]},
  { path: 'modifier-users2', component: ModifierInfoUsers2Component, canActivate: [MyGuardGuard]},
  { path: '**', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
