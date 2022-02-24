import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import {FormsModule} from '@angular/forms'

//importaciones.
import Swal from 'sweetalert2'



@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styles: [
  ]
})
export class CustomerManagerComponent implements OnInit {

 
public linkThem:any;
public _dateSelected:string;
  constructor(
    private _customerService:CustomerService
  ) {

    console.log('Se llamo a este elemento');
   }

  ngOnInit(): void {
    console.log('Se llamo a este elemento');
    this.getCustomerAll(); 
    console.log('Valor del linkthem');
    this.linkThem = document.getElementById("fecha");
    console.log(this.linkThem);
    this._dateSelected=this.format();

    console.log(this.linkThem.value);
     
  }

  edit()
  {
    console.log(this.linkThem.value);
    console.log("se hizo click en el boton");
  }

  format():string{
    const f= new Date();
    const año = f.getFullYear();
    const mes = ("0" + (f.getMonth()+1)).substr(-2);
    const dia = ("0" + f.getDate()).substr(-2);
    return `${año}-${mes}-${dia}`
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
