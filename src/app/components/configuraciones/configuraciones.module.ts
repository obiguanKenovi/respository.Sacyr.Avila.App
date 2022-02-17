import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    CustomerManagerComponent,
    EditCustomerComponent
  ],
  exports:[
    CustomerManagerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionesRoutingModule,
    NgbModule,
    SharedModule,
    NgSelectModule
  ]
})
export class ConfiguracionesModule { }
