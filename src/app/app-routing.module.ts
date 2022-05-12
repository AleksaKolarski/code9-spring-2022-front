import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeerPageComponent } from './page/create-beer-page/create-beer-page.component';
import { CreateOrderPageComponent } from './page/create-order-page/create-order-page.component';
import { ShowAllBeerPageComponent } from './page/show-all-beer-page/show-all-beer-page.component';
import { ShowBeerPageComponent } from './page/show-beer-page/show-beer-page.component';
import { AllBeerResolver } from './resolver/all-beer.resolver';
import { BeerResolver } from './resolver/beer.resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: ShowAllBeerPageComponent,
    resolve: AllBeerResolver
  },
  {
    path: 'beers/create',
    component: CreateBeerPageComponent
  },
  {
    path: 'beers/:id',
    component: ShowBeerPageComponent,
    resolve: BeerResolver
  },
  {
    path: 'orders/create',
    component: CreateOrderPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
