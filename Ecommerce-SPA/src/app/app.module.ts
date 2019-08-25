import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { CartItemsService } from './_services/cartItems.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './_guards/auth.guard';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailedComponent } from './item-detailed/item-detailed.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      CartComponent,
      ItemCardComponent,
      ItemDetailedComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      CartItemsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
