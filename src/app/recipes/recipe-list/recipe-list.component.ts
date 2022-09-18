import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a image', 'https://skinnyms.com/wp-content/uploads/2018/04/Traditional-Ratatouille-1.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a image', 'https://www.simplyrecipes.com/thmb/1lLEOxwEeSdA6pGOpkicwj8UHUM=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-b-1600-3f2cdd1b50654a5b83a2b67a9b94735a.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecepeSelectedd(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
