import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {


  public variable:any;

  constructor(
    public _router:Router,
    public _route:ActivatedRoute
  ) {
     this._route.params.subscribe(params=>{
       this.variable= params['id'];
     })

     console.log(`El numero es ${this.variable}`);
   }

  ngOnInit(): void {
  }

  save(){
    console.log('Se guardo el registro');
  }

  cancelar()
  {
    console.log('Se cancelo');
  }

}
