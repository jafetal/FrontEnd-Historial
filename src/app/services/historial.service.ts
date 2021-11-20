import { Observable } from 'rxjs';
import { Historial } from './../models/historial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioSesion } from '../models/usuario-sesion';

@Injectable()
export class HistorialService {
  private dataUrl = '';

  constructor(private http: HttpClient) { }

  public nuevoHistorial(historial: Historial): Observable<any> {
    return this.http.post<any>(this.dataUrl + 'newHistorial', JSON.stringify(historial));
  }
  public consultarHistorial(curps: string): Observable<any> {
    return this.http.post<any>(this.dataUrl + 'getHistorial', JSON.stringify({curp: curps}));
  }
}
