import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Greeter } from './component/greeter';
import { DisplayRecipe } from './component/display-recipe';
import { DropdownMenu } from './component/dropdown-menu';
import { Homepage } from './component/homepage';
import { MyAccount } from './component/my-account';
import { RecipeService } from './service/recipe-service';
import { RecipeClient } from './client/recipe-client';
import { AppRoot } from './component/app-root';
import { ShoppingBasket } from './component/shopping-basket';

@NgModule({
  declarations: [
    Greeter,
    DisplayRecipe,
    DropdownMenu,
    Homepage,
    MyAccount,
    AppRoot,
    ShoppingBasket
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    RecipeClient
  ],
  bootstrap: [
    AppRoot
  ]
})
export class AppModule { }
