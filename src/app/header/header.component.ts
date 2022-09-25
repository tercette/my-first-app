import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService){}
  collapsed = true;

  onSaveData(){
    this.dataStorageService.storeRecipe();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
