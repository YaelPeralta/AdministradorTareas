import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-tareas',
    loadChildren: () => import('./lista-tareas/lista-tareas.module').then( m => m.ListaTareasPageModule)
  },
  {
    path: 'add-tareas',
    loadChildren: () => import('./add-tareas/add-tareas.module').then( m => m.AddTareasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
