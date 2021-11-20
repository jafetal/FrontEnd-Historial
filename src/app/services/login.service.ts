import { UsuarioSesion } from './../models/usuario-sesion';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';
import { Historial } from './../models/historial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private dataUrl = 'getUser';

  constructor(private http: HttpClient) { }

  public iniciarSesion(usuario: UsuarioSesion): Observable<Usuario> {
    console.log(JSON.stringify(usuario));
    return this.http.post<Usuario>(this.dataUrl, JSON.stringify(usuario));
  }
}
