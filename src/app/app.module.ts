import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { RecommandationComponent } from './MainPage/recommandation/recommandation.component';
import { WelcomePageComponent } from './MainPage/welcome-page/welcome-page.component';
import { BenefitsComponent } from './MainPage/benefits/benefits.component';
import { SignupComponent } from './Authentification/signUp/sign-up/sign-up.component';
import { SignInComponent } from './Authentification/signIn/sign-in/sign-in.component';
import { MainSearchComponent } from './Searchs/mainSearch/main-search/main-search.component';
import { SideNavComponent } from './Navigations/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    FooterComponent,
    RecommandationComponent,
    WelcomePageComponent,
    BenefitsComponent,
    SignupComponent,
    SignInComponent,
    MainSearchComponent,
    SideNavComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
