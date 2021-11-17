import { Observable } from 'rxjs';
import { Historial } from './../models/historial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HistorialService {
  private dataUrl = 'historial/';

  constructor(private http: HttpClient) { }

  public consultarTodos(): Observable<Historial[]> {
    return this.http.get<Historial[]>(this.dataUrl + 'consultarTodos');
  }

  public consultar(idHistorial: number): Observable<Historial> {
    return this.http.get<Historial>(this.dataUrl + `consultar/${idHistorial}`);
  }

  public agregar(historial: Historial): Observable<void> {
    return this.http.post<void>(this.dataUrl + 'agregar', historial);
  }

  public editar(historial: Historial): Observable<void> {
    return this.http.put<void>(this.dataUrl + 'editar', historial);
  }

  public eliminar(idHistorial: number): Observable<void>  {
    return this.http.delete<void>(this.dataUrl + `eliminar/${idHistorial}`);
  }
}
