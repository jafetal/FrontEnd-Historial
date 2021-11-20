import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AdministradorAuthService {
  constructor() {}

  public getToken(): string | null {
    return localStorage.getItem('usuarioIniciado');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null && token !== undefined;
  }
}
