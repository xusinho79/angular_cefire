import { Injectable } from '@angular/core';
import { Evento } from '../interface/evento';
import { EventoResponse } from '../interface/evento-response';
import { EventoDeleteResponse} from '../interface/evento-delete-response';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventoURL = 'eventos';


  constructor(private http: HttpClient) { }

  getEvento(): Observable<Evento[]> {
    return this.http.get<{eventos: Evento[]}>(this.eventoURL).pipe(
    map(response => response.eventos),
    );
  }

  addEvento(evento: Evento): Observable<Evento> {
  return this.http
    .post<EventoResponse>(this.eventoURL, evento)
    .pipe(map((resp) => resp.evento));
  }

  deleteEvento(id: number): Observable<EventoDeleteResponse> {
    return this.http
    .delete<{identificador: EventoDeleteResponse}>(this.eventoURL+'/'+id)
    .pipe(map((resp) => resp.identificador));
  }
}
