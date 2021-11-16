import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdministradorComponent } from './layout-administrador.component';
import { LayoutAdministradorRoutingModule } from './layout-administrador.routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutAdministradorRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [],
  providers: [
  ]
})
export class LayoutAdministradorModule { }
