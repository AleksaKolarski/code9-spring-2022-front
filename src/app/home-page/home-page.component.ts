import { Component, OnInit } from '@angular/core';
import { BeerService } from '../service/beer.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private beerService: BeerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  
}
