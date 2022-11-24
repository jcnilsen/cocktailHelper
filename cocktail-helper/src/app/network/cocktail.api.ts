// This is where you would make the api call.
// Since this is just being stubbed out right now, we're gonna fake it

import { Injectable } from "@angular/core";
import { CocktailDefinition as CocktailList } from "../models/Cocktails.model";

@Injectable({ providedIn: 'root' })
export class CocktialAPI {
  getCocktailList(): CocktailList[] {
    // TODO: convert to async
    return require("../stubData/cocktailList.json");
  }
}
