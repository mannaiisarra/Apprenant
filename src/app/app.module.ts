import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HeaderComponent } from './home/components/header/header.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAccueilComponent } from './home/admin-accueil/admin-accueil.component';
import { ApprenantAccueilComponent } from './home/apprenant-accueil/apprenant-accueil.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './home/profile/profile.component';
import { NewClientComponent } from './home/client/new-client/new-client.component';
import { ListclientComponent } from './home/client/listclient/listclient.component';
import { TrainerLearnerComponent } from './home/trainer-learner/trainer-learner.component';
import { EditClientComponent } from './home/client/edit-client/edit-client.component';
import { SupprimerClientComponent } from './home/client/supprimer-client/supprimer-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationComponent } from './home/formation/formation.component';
import { FormateurApprenantComponent } from './home/formateur-apprenant/formateur-apprenant.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    AdminAccueilComponent,
    ApprenantAccueilComponent,
    ErrorComponent,
    ProfileComponent,
    NewClientComponent,
    ListclientComponent,
    TrainerLearnerComponent,
    EditClientComponent,
    SupprimerClientComponent,
    FormationComponent,
    FormateurApprenantComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
