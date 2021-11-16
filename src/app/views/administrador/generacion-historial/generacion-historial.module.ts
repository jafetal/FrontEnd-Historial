import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GeneracionHistorialRoutingModule } from './generacion-historial.routing.module';
import { GeneracionHistorialComponent } from './generacion-historial.component';

@NgModule({
  declarations: [
    GeneracionHistorialComponent
  ],
  imports: [
    GeneracionHistorialRoutingModule
  ],
  providers: []
})
export class GeneracionHistorialModule { }
