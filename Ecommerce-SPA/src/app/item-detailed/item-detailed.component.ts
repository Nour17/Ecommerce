import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../_models/item';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { CartItemsService } from '../_services/cartItems.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.css']
})
export class ItemDetailedComponent implements OnInit {
  baseUrl = environment.apiUrl;
  item: Item;
  rateArray = [];

  constructor(private http: HttpClient, private alertify: AlertifyService
    , private route: ActivatedRoute, private cartItemService: CartItemsService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.http.get<Item>(this.baseUrl + 'items/' + this.route.snapshot.params['id'], httpOptions).subscribe((item: Item) => {
      this.item = item;
      for (let i = 1; i <= this.item.rate; i++) {
        this.rateArray.push(i);
      }
    }, error => {
      this.alertify.error(error);
    });
  }

  addToCart(item) {
    this.cartItemService.addItemToCart(item);
  }
}
