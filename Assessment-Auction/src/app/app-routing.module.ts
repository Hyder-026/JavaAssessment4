import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { InsertCustomerComponent } from './insert-customer/insert-customer.component';
import { InsertSellerComponent } from './insert-seller/insert-seller.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { SellerListComponent } from './sellerlist/seller-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'',redirectTo:'seller',pathMatch:'full'},
  {path:'seller', component:SellerListComponent},
  {path:'product', component:ProductDetailsComponent},
  {path:'insert-seller', component:InsertSellerComponent},
  {path:'update-product/:sellerID', component:UpdateProductComponent},
  {path:'seller-details/:sellerID', component:SellerDetailsComponent},
  {path:'view-product/:sellerID', component:ViewProductComponent},
  {path:'insert-customer', component:InsertCustomerComponent},
  {path:'customer', component:CustomerListComponent},
  {path:'view-customer/:customerID', component:CustomerViewComponent},
  {path:'update-customer/:customerID', component:UpdateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
