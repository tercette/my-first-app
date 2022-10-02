import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';
import * as RecipeActions from '../recipes/store/recipe.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
  }

  onSaveData() {
    //this.dataStorageService.storeRecipe();
    this.store.dispatch(new RecipeActions.StoreRecipes())
  }

  onFetchData() {
    //this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes())
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
