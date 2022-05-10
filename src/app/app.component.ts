import { Component } from '@angular/core';
import { NetworkService } from './service/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public networkService: NetworkService
  ) {}
}
