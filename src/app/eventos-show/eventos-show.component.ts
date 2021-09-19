import { Component, OnInit } from '@angular/core';
//import { IEvento } from './evento';
import { Evento } from '../interface/evento';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent {

  //constructor() { }

  llistaEvents : Evento[] = [{title: 'el primer event',
  image: '',
  date: '21/04/2021',
  description: 'descripció del primer event',
  price: 30},
  {title: 'el segon event',
    image: '',
    date: '30/04/2021',
    description: 'descripció del segon event',
    price: 35}];

    constructor() { }

}
