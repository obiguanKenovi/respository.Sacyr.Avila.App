import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';

//importaciones.
import Swal from 'sweetalert2'


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

  sweeAlerTes()
  {
    Swal.fire({
      title: '¿Estas seguro de querer realizar estas accion?',
      text: "No podras revertir la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar el registro.!'
    }).then((result) => {
      if (result.isConfirmed) {
         
        console.log("eliminado archivos...");

        Swal.fire(
          'Eliminado!',
          'El registro fue eliminado satisfactoriamente.',
          'success'
        )
      }
    })
  }

}
