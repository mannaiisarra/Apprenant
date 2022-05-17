import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminAccueilComponent } from './home/admin-accueil/admin-accueil.component';
import { ApprenantAccueilComponent } from './home/apprenant-accueil/apprenant-accueil.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard'

import { NewClientComponent } from './home/client/new-client/new-client.component';
import { TrainerLearnerComponent } from './home/trainer-learner/trainer-learner.component';
import { ListclientComponent } from './home/client/listclient/listclient.component';
import { EditClientComponent } from './home/client/edit-client/edit-client.component';
import { FormateurApprenantComponent } from './home/formateur-apprenant/formateur-apprenant.component';

const routes: Routes = [
{path:"login",component:LoginComponent ,canActivate:[LogoutGuard]},




  {path:"admin",component:AdminAccueilComponent},
  {path:"apprenant",component:ApprenantAccueilComponent},
  {path:"home",component:DashboardComponent ,canActivate:[AuthGuard],children:[

 // {path:"profile",component:ProfileComponent},
  {path:"profile",component:ProfileComponent},
  {path:"formateur_Apprenant",component:FormateurApprenantComponent},
  {path:"trainerlearner",component:TrainerLearnerComponent},
  {path:"editUser/:id",component:EditClientComponent},
  {path:"listclient",component:ListclientComponent},
  
  {path:"newclient",component:NewClientComponent}
]},
  {path:"**",component:ErrorComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
