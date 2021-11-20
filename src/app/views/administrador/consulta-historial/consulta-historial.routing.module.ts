import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorAuthGuard } from 'src/app/auth/administrador-auth-guard.service';
import { ConsultaHistorialComponent } from './consulta-historial.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdministradorAuthGuard],
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
