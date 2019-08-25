import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../_models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item;
  rateArray = [];
  zeroRate = false;

  constructor() { }

  ngOnInit() {
    if (this.item.rate === 0) {
      this.zeroRate = true;
    }

    for (let i = 1; i <= this.item.rate; i++) {
      this.rateArray.push(i);
    }
  }
}
