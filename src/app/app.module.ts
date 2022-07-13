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
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './home/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FormationComponent } from './home/formation/formation.component';
import { DetailComponent } from './home/detail/detail.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TestComponent } from './home/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepsComponent } from './home/steps/steps.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { IntroductionComponent } from './home/quiz/introduction/introduction.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { IntroductionnComponent } from './home/quiz/introductionn/introductionn.component';
import { HistoriqueComponent } from './home/historique/historique.component';
import { VideoComponent } from './home/video/video.component';


//import { MatFileUploadModule } from 'angular-material-fileupload';
//import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    ProfileComponent,
    FormationComponent,
    DetailComponent,
    TestComponent,
    StepsComponent,
    AcceuilComponent,
    IntroductionComponent,
    IntroductionnComponent,
    HistoriqueComponent,
    VideoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  //  MatButtonModule,
  //  MatFileUploadModule
 

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
