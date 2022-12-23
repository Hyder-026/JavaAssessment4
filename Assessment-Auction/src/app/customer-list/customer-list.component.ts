import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];
  customerID!: number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router) {

  }
  ngOnInit(): void {
    this.getCustomers();
  }
  private getCustomers() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    })
  }

  customerDeletion(customerID: number) {
    console.log(customerID);
    this.customerService.deleteCustomer(customerID).subscribe(data => {
      console.log(data);
      this.getCustomers()
    })
  }
  viewTheCustomer(customerID: number) {
    this.router.navigate(['view-customer', customerID]);
  }
  updateTheCustomer(customerId: number) {
    this.router.navigate(['update-customer', customerId]);
  }

}
