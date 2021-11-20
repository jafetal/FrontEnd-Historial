import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GeneracionHistorialRoutingModule } from './generacion-historial.routing.module';
import { GeneracionHistorialComponent } from './generacion-historial.component';
import { GeneracionHistorialFormularioComponent } from './generacion-historial-formulario/generacion-historial-formulario.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialService } from 'src/app/services/historial.service';

@NgModule({
  declarations: [
    GeneracionHistorialComponent,
    GeneracionHistorialFormularioComponent
  ],
  imports: [
    GeneracionHistorialRoutingModule, FormsModule, CommonModule
  ],
  providers: [HistorialService]
})
export class GeneracionHistorialModule { }
