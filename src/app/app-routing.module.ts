import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminAccueilComponent } from './home/admin-accueil/admin-accueil.component';
import { ApprenantAccueilComponent } from './home/apprenant-accueil/apprenant-accueil.component';
import { FormateurAccueilComponent } from './home/formateur-accueil/formateur-accueil.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './home/profile/profile.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},

 


  {path:"admin",component:AdminAccueilComponent},
  {path:"apprenant",component:ApprenantAccueilComponent},
  {path:"formateur",component:FormateurAccueilComponent},
  {path:"",component:DashboardComponent , children:[

  {path:"profile",component:ProfileComponent},
]},
  {path:"**",component:ErrorComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
