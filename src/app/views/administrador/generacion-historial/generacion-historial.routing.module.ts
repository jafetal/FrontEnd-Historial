import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneracionHistorialComponent } from './generacion-historial.component';

const routes: Routes = [
  {
    path: '',
    component: GeneracionHistorialComponent,
    data: {
      title: 'Consulta',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneracionHistorialRoutingModule { }
