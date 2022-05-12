import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/dto/beer';

@Component({
  selector: 'app-show-all-beer-page',
  templateUrl: './show-all-beer-page.component.html',
  styleUrls: ['./show-all-beer-page.component.scss']
})
export class ShowAllBeerPageComponent implements OnInit {

  beers?: Beer[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.beers = this.route.snapshot.data['beers'];
  }

}
