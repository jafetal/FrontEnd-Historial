import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaHistorialComponent } from './consulta-historial.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaHistorialComponent,
    data: {
      title: 'Consulta',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaHistorialRoutingModule { }
