import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTareasPageRoutingModule } from './add-tareas-routing.module';

import { AddTareasPage } from './add-tareas.page';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    AddTareasPageRoutingModule
  ],
  declarations: [AddTareasPage]
})
export class AddTareasPageModule {}
