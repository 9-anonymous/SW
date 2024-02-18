// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { RecommandationComponent } from './MainPage/recommandation/recommandation.component';
import { WelcomePageComponent } from './MainPage/welcome-page/welcome-page.component';
import { BenefitsComponent } from './MainPage/benefits/benefits.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { EmailComponent } from './email/email.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactMessageComponent } from './contact/contact-message/contact-message.component';
import { ContactInputComponent } from './contact/contact-input/contact-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    FooterComponent,
    RecommandationComponent,
    WelcomePageComponent,
    BenefitsComponent,
    LoginComponent,
    SignupComponent,
    NewsComponent,
    EmailComponent,
    ContactListComponent,
    ContactMessageComponent,
    ContactInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
