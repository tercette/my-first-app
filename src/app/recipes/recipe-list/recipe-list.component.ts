import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription : Subscription

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService ) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
