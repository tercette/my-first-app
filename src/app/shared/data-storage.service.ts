import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import * as  fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions'




@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://livro-de-receita-6326a-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://livro-de-receita-6326a-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipes) => {
            return {
              ...recipes,
              ingredients: recipes.ingredients ? recipes.ingredients : []
            };
          });
        }),
        tap((recipes) => {
          //this.recipeService.setRecipes(recipes);
          this.store.dispatch(new RecipesActions.SetRecipes(recipes));
        })
      );
  }
}
