import { LayoutAdministradorComponent } from './views/administrador/layout-administrador/layout-administrador.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdministradorRoutingModule } from './views/administrador/layout-administrador/layout-administrador.routing.module';
import { AdministradorAuthGuard } from './auth/administrador-auth-guard.service';
import { AdministradorAuthService } from './auth/administrador-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AdministradorAuthGuard,
    AdministradorAuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
