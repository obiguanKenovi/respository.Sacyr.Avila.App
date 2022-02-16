import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardtwoComponent } from './dashboardtwo/dashboardtwo.component';



const routes: Routes = [
    
        {
          path: '',
          children: [
            {
              path: '',
              component: DashboardtwoComponent
            }
          ]
        }
      
      ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardtwoRoutingModule {}
