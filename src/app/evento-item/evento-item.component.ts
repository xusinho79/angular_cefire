import { Component, Input, Output, EventEmitter ,OnInit } from '@angular/core';
import { Evento } from '../interface/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent {

    @Input() evento!: Evento;

    @Output() eventoBorrat = new EventEmitter<void>();

    deleteEvento(){
      this.eventosService.deleteEvento(this.evento.id!).subscribe(
        (eventos) => (this.eventoBorrat.emit()), // Success function
        (error) => console.error(error), // Error function (optional)
        () => console.log(this.evento.title) // Finally function (optional)
      );
      //this.eventoBorrat.emit();
    }

  constructor(private eventosService: EventoService) { }


}
