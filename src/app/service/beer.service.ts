import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBeerDTO } from '../dto/create-beer-dto';
import { Ingredient } from '../dto/ingredient';
import { Beer } from '../dto/beer';
import { NetworkService } from './network.service';
import { CreateOrderDTO } from '../dto/create-order-dto';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private http: HttpClient,
    private networkService: NetworkService
  ) { }


  getAllBeers(): Observable<Beer[]> {
    return this.http
      .get<Beer[]>(`${this.networkService.getHost()}/beers`);
  }

  getBeerById(id: string): Observable<Beer> {
    return this.http
      .get<Beer>(`${this.networkService.getHost()}/beers/${id}`);
  }

  createBeer(createBeerDTO: CreateBeerDTO): Observable<void> {
    return this.http
      .post<void>(
        `${this.networkService.getHost()}/beers`,
        createBeerDTO
      );
  }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http
      .get<Ingredient[]>(`${this.networkService.getHost()}/ingredients`);
  }

  createOrderService(createOrderDTO: CreateOrderDTO): Observable<void> {
    return this.http
      .post<void>(
        `${this.networkService.getHost()}/orders`,
        createOrderDTO
      );
  }
}
