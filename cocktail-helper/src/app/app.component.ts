import { Component, OnInit } from '@angular/core';
import { CocktailDefinition, CocktailDefinition as CocktailList } from './models/Cocktails.model';
import { CocktialAPI } from './network/cocktail.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cocktails: CocktailDefinition[] = [];

  constructor(private cocktailAPI: CocktialAPI) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailAPI.getCocktailList();
  }
}
