import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styles: [
  ]
})
export class CustomerManagerComponent implements OnInit {

  constructor() {

    console.log('Se llamo a este elemento');
   }

  ngOnInit(): void {

    console.log('Se llamo a este elemento');
   
  }

  edit()
  {
    console.log("se hizo click en el boton");
  }

}
