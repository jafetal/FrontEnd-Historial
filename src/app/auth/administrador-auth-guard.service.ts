import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AdministradorAuthService } from './administrador-auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AdministradorAuthGuard implements CanActivate {
  constructor(
    private authService: AdministradorAuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login-administrador']);
      return false;
    }

    return true;
  }
}
