import { Injectable } from '@angular/core';
import { CartEntry } from '../model/cart-entry';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartEntry[] = [];


  constructor() { }


  getCart(): CartEntry[] {
    return this.cart;
  }

  addOne(beerId: string) {
    const cartEntry = this.cart.find(ce => ce.beerId === beerId);

    // if cartEntry already exists
    if(cartEntry !== undefined) {
      console.log('changing existing cartEntry');
      cartEntry.amount++;
    }
    // if cartEntry does not exist
    else {
      console.log('creating new cartEntry');
      const newCartEntry = new CartEntry(beerId, 1);
      this.cart.push(newCartEntry);
    }
  }

  removeOne(beerId: String) {
    const cartEntry = this.cart.find(ce => ce.beerId === beerId);

    // if cartEntry already exists
    if(cartEntry !== undefined) {
      console.log('changing existing cartEntry');
      cartEntry.amount--;
      if(cartEntry.amount <= 0) {
        console.log('removing cartEntry');
        const cartEntryIndex = this.cart.findIndex(ce => ce.beerId === beerId);
        if(cartEntryIndex > -1) {
          this.cart.splice(cartEntryIndex, 1);
        }
      }
    }
  }

  // addToCart(beerId: string, amount: number) {
  //   const cartEntry = this.cart.find(ce => ce.beerId === beerId);

  //   // if cartEntry already exists
  //   if(cartEntry !== undefined) {
  //     console.log('changing existing cartEntry');
  //     cartEntry.amount += amount;
  //     if(cartEntry.amount <= 0) {
  //       console.log('removing cartEntry');
  //       const cartEntryIndex = this.cart.findIndex(ce => ce.beerId === beerId);
  //       if(cartEntryIndex > -1) {
  //         this.cart.splice(cartEntryIndex, 1);
  //       }
  //     }
  //   }
  //   // if cartEntry does not exist
  //   else {
  //     console.log('creating new cartEntry');
  //     const newCartEntry = new CartEntry(beerId, amount);
  //     this.cart.push(newCartEntry);
  //   }
  // }
}
