import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertCustomerComponent } from './insert-customer/insert-customer.component';
import { InsertSellerComponent } from './insert-seller/insert-seller.component';
import { FormsModule } from '@angular/forms';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { SellerListComponent } from './sellerlist/seller-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CustomerService } from './customer.service';
import { SellerService } from './seller.service';

@NgModule({
  declarations: [
    AppComponent,
    InsertCustomerComponent,
    InsertSellerComponent,
    SellerDetailsComponent,
    SellerListComponent,
    CustomerListComponent,
    CustomerViewComponent,
    ProductDetailsComponent,
    UpdateCustomerComponent,
    UpdateProductComponent,
    ViewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService, SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
