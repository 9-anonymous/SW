import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { EmailComponent } from './email/email.component';
import { ContactComponent } from './contactshare/contact/contact.component';
const routes: Routes = [
  { path: '' , component : MainPageComponent},
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'contact', component: ContactComponent }


];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
