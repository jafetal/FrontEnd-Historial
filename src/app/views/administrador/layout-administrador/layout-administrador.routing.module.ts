import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'generacion-historial',
    loadChildren: () =>
      import('../../../views/administrador/generacion-historial/generacion-historial.module').then(
        (m) => m.GeneracionHistorialModule
      )
  },
  {
    path: 'consulta-historial',
    loadChildren: () =>
      import('../../../views/administrador/consulta-historial/consulta-historial.module').then(
        (m) => m.ConsultaHistorialModule
      )
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../../../views/administrador/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdministradorRoutingModule {}
