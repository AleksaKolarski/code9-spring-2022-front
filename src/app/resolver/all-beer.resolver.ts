import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Beer } from '../dto/beer';
import { BeerService } from '../service/beer.service';

@Injectable({
  providedIn: 'root'
})
export class AllBeerResolver implements Resolve<Beer[]> {

  constructor(
    private beerService: BeerService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Beer[]> {
    return this.beerService.getAllBeers();
  }
}
