import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/dto/beer';

@Component({
  selector: 'app-show-beer-page',
  templateUrl: './show-beer-page.component.html',
  styleUrls: ['./show-beer-page.component.scss']
})
export class ShowBeerPageComponent implements OnInit {

  private beer?: Beer;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.beer = this.route.snapshot.data['beer'];
  }

}
