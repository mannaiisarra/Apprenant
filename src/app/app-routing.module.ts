import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard'
import { DetailComponent } from './home/detail/detail.component';
//import { TrainerLearnerComponent } from './home/trainer-learner/trainer-learner.component';
import { FormationComponent } from './home/formation/formation.component';
import { StepsComponent } from './home/steps/steps.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TestComponent } from './home/test/test.component';
import { QuizComponent } from './home/quiz/quiz.component';
import { IntroductionComponent } from './home/quiz/introduction/introduction.component';
import { IntroductionnComponent } from './home/quiz/introductionn/introductionn.component';
import { HistoriqueComponent } from './home/historique/historique.component';
import { VideoComponent } from './home/video/video.component';

const routes: Routes = [
{path:"login",component:LoginComponent ,canActivate:[LogoutGuard]},





  {path:"home",component:DashboardComponent ,canActivate:[AuthGuard],children:[
    {path:"acceuil",component:AcceuilComponent},

 {path:"formation",component:FormationComponent},
  {path:"test",component:TestComponent},
  {path:"profile",component:ProfileComponent},
  {path:"intro/:id",component:IntroductionnComponent},
  {path:"detailformation/:id",component:DetailComponent},
  {path:"steps/:id",component:StepsComponent},
  {path:"historique",component:HistoriqueComponent},
  {path:"quiz/:id",component:IntroductionComponent},
  {path:"videos/:id",component:VideoComponent}
  
]},
  {path:"**",component:ErrorComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
