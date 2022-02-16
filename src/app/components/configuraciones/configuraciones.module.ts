import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CustomerManagerComponent
  ],
  exports:[
    CustomerManagerComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionesRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ConfiguracionesModule { }
