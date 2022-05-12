import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeerIdResolver implements Resolve<String> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): String {
    const beerId: string = route.params['beerId'];
    return beerId;
  }
}
