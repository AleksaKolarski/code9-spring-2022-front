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
export class BeerResolver implements Resolve<Beer> {

  constructor(
    private beerService: BeerService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Beer> {
    const id = route.params['id'];
    console.log('getting beer with id ' + id);
    return this.beerService.getBeerById(id);
  }
}
