import { Observable } from 'rxjs';
import { Historial } from './../models/historial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioSesion } from '../models/usuario-sesion';

@Injectable()
export class UsuarioService {
  private dataUrl = '';

  constructor(private http: HttpClient) { }

  public consultarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.dataUrl + 'getUserAll');
  }

  public nuevoUsuario(usuario: UsuarioSesion): Observable<string> {
    return this.http.post<string>(this.dataUrl + 'addUser', usuario);
  }
}
