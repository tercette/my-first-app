import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule ({
declarations: [
  ShoppingListComponent,
  ShoppingEditComponent,
],
imports: [
  RouterModule,
  SharedModule,
  FormsModule,
  ShoppingListRoutingModule
],
})
export class ShoppingListModule {}


