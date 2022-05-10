import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBeerDTO } from '../dto/create-beer-dto';
import { Beer } from '../model/beer';
import { NetworkService } from './network.service';

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
      .get<Beer[]>(`${this.networkService.getHost()}/v1/design`);
  }

  getBeerById(id: string): Observable<Beer> {
    return this.http
      .get<Beer>(`${this.networkService.getHost()}/v1/design/${id}`);
  }

  createBeerDesign(createBeerDTO: CreateBeerDTO): Observable<void> {
    return this.http
      .post<void>(
        `${this.networkService.getHost()}/v1/design`,
        createBeerDTO
      );
  }
}
