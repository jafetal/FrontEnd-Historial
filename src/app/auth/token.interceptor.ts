import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AdministradorAuthGuard } from './administrador-auth-guard.service';
import { catchError } from 'rxjs/internal/operators';
import { environment } from './../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public auth: AdministradorAuthGuard,
    private router: Router
  ) {}

  private mensajeError = 'Ocurrió un error inesperado, favor de contactar al administrador del sistema.';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string | null;
    token = '';

    // if (this.router.url.includes('administrador')) {
    //   token = localStorage.getItem('token-administrador');
    // }

    let newRequest = null;

    if (request.url.includes('i18n') || request.url.includes('hooks.slack.com')) {
      newRequest = request.clone({
        url: request.url
      });
    } else if (request.url === 'login/getUser') {
      newRequest = request.clone({
        url: environment.urlBackend + request.url
      });
    } else {
      newRequest = request.clone({
        url: environment.urlBackend + request.url,
        setHeaders: {
          'Content-Type': 'application/json, text/plain'
        }
      });
    }

    return next.handle(newRequest).pipe(
      catchError((error) => {
        // Estatus 409 son excepciones controladas por el backend.
        if (error.status === 409) {
          // Si se regresa una Exception con response Blob, este lo obliga a retornar un string
          if (error.error instanceof Blob) {
            var reader = new FileReader();
            reader.onload = (params) => {
              // this.modalService.modalError(params.target.result.toString());
              if (reader.result != null){
                console.log(reader.result.toString());
              }
            };
            reader.readAsText(error.error);
          } else {
            console.log(error.error);
          }
        } else if (error.status === 503) {
          // Servidor no disponible por mantenimiento
          window.location.reload();
        } else if (error.status === 401 || error.status === 0) {
          // Cuando el token enviado en la peticion es invalido, el servidor retorna un error 401
          if (this.router.url.includes('administrador')) {
            // localStorage.removeItem('token-administrador');
            this.router.navigate(['/login']);
          }
        } else {
          console.log(this.mensajeError);
        }
        return throwError(error);
      })
    );
  }
}
