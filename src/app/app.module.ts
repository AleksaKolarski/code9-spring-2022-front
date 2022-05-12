import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowBeerPageComponent } from './page/show-beer-page/show-beer-page.component';
import { ShowAllBeerPageComponent } from './page/show-all-beer-page/show-all-beer-page.component';
import { CreateBeerPageComponent } from './page/create-beer-page/create-beer-page.component';
import { CreateOrderPageComponent } from './page/create-order-page/create-order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowBeerPageComponent,
    ShowAllBeerPageComponent,
    CreateBeerPageComponent,
    CreateOrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
