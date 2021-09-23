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
  image: 'assets/evento1.jpg',
  date: '2021/04/21',
  description: 'descripció del primer event',
  price: 30},
  {title: 'el segon event',
    image: 'assets/evento2.jpg',
    date: '2021/02/14',
    description: 'descripció del segon event',
    price: 35}];
  search="";

  newEvento: Evento = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
    };

  orderDate(){
    this.search="";
    this.llistaEvents.sort(function(a, b) {
      var textA = a.date;
      var textB = b.date;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }

  orderPrice(){
    this.search="";
    this.llistaEvents.sort(function(a, b) {
      var textA = a.price;
      var textB = b.price;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }

  addEvento(){
    this.llistaEvents.push(this.newEvento);
    let eventoBuit:Evento = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
      };
    this.newEvento = eventoBuit;
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
    this.newEvento.image = reader.result as string;
    });
    }

  borraEvento(ind: number){
      this.llistaEvents.splice(ind,1);
      this.llistaEvents=[...this.llistaEvents];
  }

    constructor() { }

}
