import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';



const routes: Routes = [
   {
    path: '',
    children: [
      {
        path: 'clientes',
        component: CustomerManagerComponent
      }, 
    ]
   }
  
 
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfiguracionesRoutingModule {}
