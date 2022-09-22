import { ShoppingListService } from './../shopping-list/shoppingList.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Torta de presunto e queijo',
      'tortas',
      'https://p2.trrsf.com/image/fget/cf/548/0/images.terra.com/2020/11/11/escondidinho-de-frigideira-768x512.jpg',
      [
        new Ingredient('ovos',3),
        new Ingredient('caixa de leite',1),
        new Ingredient('batata cozida assada',1),
        new Ingredient('colher de sopa de margarina',2),
        new Ingredient('xicara de cha de farinha de trigo',1),
        new Ingredient('colheres de queijo parmesao ralado',2),
        new Ingredient('sal, pimenta-do reino e oregano a gosto',3),
      ]),
    new Recipe(
      'Pao de queijo',
      'petiscos',
      'https://uploads.metropoles.com/wp-content/uploads/2020/11/05213836/pao-de-queijo-batata-doce-600x400.jpg',
      [
        new Ingredient('ovos',2),
        new Ingredient('xícaras (chá) de queijo de minas padrão (meia cura) ralado',2),
        new Ingredient('xícara (chá) de óleo',2),
        new Ingredient('xícara (chá) de leite',1),
        new Ingredient('250g de polvilho doce (aproximadamente)',1),
        new Ingredient('250g de polvilho azedo',1),
        new Ingredient('Óleo para untar',1),
      ])
    ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe( index:number ){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
  }
}
