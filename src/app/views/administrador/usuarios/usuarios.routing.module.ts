import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorAuthGuard } from 'src/app/auth/administrador-auth-guard.service';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdministradorAuthGuard],
    component: UsuariosComponent,
    data: {
      title: 'Consulta',
    }
  },
  {
    path: 'nuevo',
    component: UsuarioFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
