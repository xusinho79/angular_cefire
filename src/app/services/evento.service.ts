import { Injectable } from '@angular/core';
import { Evento } from '../interface/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  getEvento(): Evento[] {
    return [{title: 'el primer event',
    image: 'assets/evento1.jpg',
    date: '2021/04/21',
    description: 'descripció del primer event',
    price: 30},
    {title: 'el segon event',
      image: 'assets/evento2.jpg',
      date: '2021/02/14',
      description: 'descripció del segon event',
      price: 35}];
  }


}
