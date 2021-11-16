import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    UsuariosRoutingModule
  ],
  providers: []
})
export class UsuariosModule { }
