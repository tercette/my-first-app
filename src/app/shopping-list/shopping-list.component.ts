import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Observable<{ ingredients: Ingredient[] }> ;
  private destroying: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{ShoppingList: { ingredients: Ingredient[] }}>
    ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('ShoppingList');
    /* this.ingredients = this.slService.getIngredients();
    this.destroying = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      ) */
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    ''//this.destroying.unsubscribe();
  }

}
