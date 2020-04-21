import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppRoot } from './component/app-root';
import { Greeter } from './component/greeter';
import { DisplayRecipe } from './component/display-recipe';
import { DropdownMenu } from './component/dropdown-menu';

@NgModule({
  declarations: [
    AppRoot,
    Greeter,
    DisplayRecipe,
    DropdownMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppRoot
  ]
})
export class AppModule { }
