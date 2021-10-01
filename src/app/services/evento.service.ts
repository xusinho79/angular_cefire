import { Injectable } from '@angular/core';
import { Evento } from '../interface/evento';
import { EventoResponse } from '../interface/evento-response'
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventoURL = 'http://arturober.com:5003/eventos';

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
}
