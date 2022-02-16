import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardtwoRoutingModule } from './dashboardtwo-routing.module';
import { DashboardtwoComponent } from './dashboardtwo/dashboardtwo.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DashboardtwoComponent
  ],
  imports: [
    CommonModule,
    DashboardtwoRoutingModule,
    CommonModule,
    // DashboardRoutingModule,
    NgApexchartsModule,
    ChartsModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class DashboardtwoModule { }
