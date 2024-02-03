import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { RecommandationComponent } from './MainPage/recommandation/recommandation.component';
import { WelcomePageComponent } from './MainPage/welcome-page/welcome-page.component';
import { BenefitsComponent } from './MainPage/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    FooterComponent,
    RecommandationComponent,
    WelcomePageComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
