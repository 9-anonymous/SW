import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { MainSearchComponent } from './Searchs/mainSearch/main-search/main-search.component';

const routes: Routes = [
  { path: '' , component : MainPageComponent},
  { path: 'searchs' , component : MainSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
