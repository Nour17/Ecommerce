import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../_services/cartItems.service';
import { Item } from '../_models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  itemsExist = true;

  constructor(private cartItemService: CartItemsService) { }

  ngOnInit() {
    const cartItemsHolder = this.cartItemService.getCartItems();
    this.cartItems = cartItemsHolder.items;
    const numberOfItems = this.cartItems.length;
    if (numberOfItems === 0) {
      this.itemsExist = false;
    }
    console.log(this.cartItems);
  }

}
