import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a image', 'https://skinnyms.com/wp-content/uploads/2018/04/Traditional-Ratatouille-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
