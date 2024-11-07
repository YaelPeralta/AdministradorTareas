import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTareasPageRoutingModule } from './add-tareas-routing.module';

import { AddTareasPage } from './add-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTareasPageRoutingModule
  ],
  declarations: [AddTareasPage]
})
export class AddTareasPageModule {}
