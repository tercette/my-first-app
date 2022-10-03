import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private destroying: Subscription;

  constructor(private slService: ShoppingListService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.destroying = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
    
  }

  ngOnDestroy() {
    this.destroying.unsubscribe();
  }

}
