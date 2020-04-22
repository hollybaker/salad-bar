import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Greeter } from './component/greeter';
import { DisplayRecipe } from './component/display-recipe';
import { DropdownMenu } from './component/dropdown-menu';
import { Homepage } from './component/homepage';
import { MyAccount } from './component/my-account';
import { AppProvider } from './provider/app-provider';

@NgModule({
  declarations: [
    Greeter,
    DisplayRecipe,
    DropdownMenu,
    Homepage,
    MyAccount
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppProvider
  ],
  bootstrap: [
    Homepage
  ]
})
export class AppModule { }
