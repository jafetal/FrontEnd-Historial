import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CommonModule } from '@angular/common';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFormularioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [UsuarioService]
})
export class UsuariosModule { }
