import { Routes } from '@angular/router';

export const full_content: Routes = [
  { 
    path: 'configuraciones',
    loadChildren: () => import('../../components/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule),
  },
  { 
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  
  { 
    path: 'dashboardtwo',
    loadChildren: () => import('../../components/dashboardtwo/dashboardtwo.module').then(m => m.DashboardtwoModule),
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
  },
  {
    path: 'maps',
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'components',
    loadChildren: () => import('../../components/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'elements',
    loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'advanced-elements',
    loadChildren: () => import('../../components/advanced-elements/advanced-elements.module').then(m => m.AdvancedElementsModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule),
  },
  {
    path: 'forms',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule)
  },
  { 
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
  },
  // {
  //   path: 'firebase',
  //   loadChildren: () => import('../../components/firebase/firebase.module').then(m => m.FirebaseModule)
  // }
]