import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../dto/ingredient';
import { BeerService } from '../service/beer.service';

@Injectable({
  providedIn: 'root'
})
export class AllIngredientResolver implements Resolve<Ingredient[]> {

constructor(
  private beerService: BeerService
){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> {
    return this.beerService.getAllIngredients();
  }
}
