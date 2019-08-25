import { Injectable } from '@angular/core';
import { AlertifyService } from './alertify.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  cartObject = { items: [] };

  constructor(private alertify: AlertifyService) { }

  getCartItems() {
    return this.cartObject;
  }

  addItemToCart(item) {
    let exists = false;

    this.cartObject.items.forEach(element => {
      if (element.id === item.id) {
        exists = true;
      }
    });

    if (!exists) {
      this.cartObject.items.push(item);
      this.alertify.success('Item added to cart');
    } else {
      this.alertify.warning('Item already in cart');
    }
  }

  removeItemFromCart(item) {
    const index = this.cartObject.items.indexOf(item);
    if (index > -1) {
      this.cartObject.items.splice(index, 1);
    }
  }
}
