import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTareasPage } from './add-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: AddTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTareasPageRoutingModule {}
