import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Greeter } from './component/greeter';
import { DisplayRecipe } from './component/display-recipe';
import { DropdownMenu } from './component/dropdown-menu';
import { Homepage } from './component/homepage';

@NgModule({
  declarations: [
    Greeter,
    DisplayRecipe,
    DropdownMenu,
    Homepage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    Homepage
  ]
})
export class AppModule { }
