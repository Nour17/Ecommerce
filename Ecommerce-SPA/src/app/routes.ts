import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './_guards/auth.guard';
import { ItemDetailedComponent } from './item-detailed/item-detailed.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'items', component: ItemComponent},
      { path: 'items/:id', component: ItemDetailedComponent},
      { path: 'cart', component: CartComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
