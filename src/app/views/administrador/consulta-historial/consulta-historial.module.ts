import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConsultaHistorialRoutingModule } from './consulta-historial.routing.module';
import { ConsultaHistorialComponent } from './consulta-historial.component';

@NgModule({
  declarations: [
    ConsultaHistorialComponent
  ],
  imports: [
    ConsultaHistorialRoutingModule
  ],
  providers: []
})
export class ConsultaHistorialModule { }
