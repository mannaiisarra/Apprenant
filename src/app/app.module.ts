import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HeaderComponent } from './home/components/header/header.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminAccueilComponent } from './home/admin-accueil/admin-accueil.component';
import { ApprenantAccueilComponent } from './home/apprenant-accueil/apprenant-accueil.component';
import { FormateurAccueilComponent } from './home/formateur-accueil/formateur-accueil.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './home/profile/profile.component';


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
    FormateurAccueilComponent,
    ErrorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
