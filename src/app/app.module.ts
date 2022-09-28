import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-rounting.module';
import { CoreModule } from './core.module';


import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AuthComponent } from './auth/auth.component';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    SharedModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
