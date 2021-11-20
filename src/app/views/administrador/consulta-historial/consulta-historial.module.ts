import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConsultaHistorialRoutingModule } from './consulta-historial.routing.module';
import { ConsultaHistorialComponent } from './consulta-historial.component';
import { HistorialFormularioComponent } from './historial-formulario/historial-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultaHistorialComponent,
    HistorialFormularioComponent
  ],
  imports: [
    ConsultaHistorialRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class ConsultaHistorialModule { }
