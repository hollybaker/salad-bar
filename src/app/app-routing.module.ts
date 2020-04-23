import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayRecipe } from './component/display-recipe';
import { Homepage } from './component/homepage';


const routes: Routes = [
  { path: 'home', component: Homepage},
  { path: 'recipe', component: DisplayRecipe},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
