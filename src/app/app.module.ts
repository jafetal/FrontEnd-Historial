import { LayoutAdministradorComponent } from './views/administrador/layout-administrador/layout-administrador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdministradorRoutingModule } from './views/administrador/layout-administrador/layout-administrador.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
