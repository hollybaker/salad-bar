import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccount } from './component/my-account';
import { DisplayRecipe } from './component/display-recipe';


const routes: Routes = [
  { path: 'my-account', component: MyAccount},
  { path: 'display-recipe', component: DisplayRecipe}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
