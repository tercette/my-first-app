import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './../shopping-list/shoppingList.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private shoppingList : ShoppingListService
    ) { }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://livro-de-receita-6326a-default-rtdb.firebaseio.com/recipes.json',
        recipes)
      .subscribe(response => {
        console.log(response)
      })
  }

  storeIngredients() {
    const ingredients = this.shoppingList.getIngredients();
    return this.http.put('https://livro-de-receita-6326a-default-rtdb.firebaseio.com/ingredients.json',
    ingredients).subscribe(response => {
      console.log(response)
    })
  }

  fetchRecipes() {
        return this.http.get<Recipe[]>(
          'https://livro-de-receita-6326a-default-rtdb.firebaseio.com/recipes.json',
        ).pipe(
      map(recipes => {
        return recipes.map(recipes => {
          return {
            ...recipes,
            ingredients: recipes.ingredients ? recipes.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }

  fetchIngredients() {
    return this.http.get<Ingredient[]>(
      'https://livro-de-receita-6326a-default-rtdb.firebaseio.com/ingredients.json',
    ).pipe(
  map(ingredient => {
    return ingredient.map(ingredient => {
      return {
        ...ingredient,
        ingredients: ingredient.name ? ingredient.name : []
      };
    });
  }),
  tap(ingredient => {
    this.shoppingList.setIngredients(ingredient);
  })
);
}
}
