import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../_models/item';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  baseUrl = environment.apiUrl;
  items: Item[];
  item: Item;

  constructor(private http: HttpClient, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get<Item[]>(this.baseUrl + 'items/', httpOptions).subscribe((items: Item[]) => {
      this.items = items;
    }, error => {
      this.alertify.error(error);
    });
  }
}
