import { Component, Input, Output, EventEmitter ,OnInit } from '@angular/core';
import { Evento } from '../interface/evento';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent {

    @Input() evento!: Evento;

    @Output() eventoBorrat = new EventEmitter<void>();

    deleteEvento(){
      this.eventoBorrat.emit();
    }

  constructor() { }


}
