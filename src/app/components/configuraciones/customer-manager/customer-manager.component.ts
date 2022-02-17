import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';


@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styles: [
  ]
})
export class CustomerManagerComponent implements OnInit {

  constructor(
    private _customerService:CustomerService
  ) {

    console.log('Se llamo a este elemento');
   }

  ngOnInit(): void {
    console.log('Se llamo a este elemento');
    this.getCustomerAll();

  }

  edit()
  {
    console.log("se hizo click en el boton");
  }

  getCustomerAll()
  {
    this._customerService.getCustomerAll().subscribe(
      resp=>{
           console.log(resp);
      },
      error=>{
          console.log();
      }
      )
  }

}
