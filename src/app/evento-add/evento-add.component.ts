import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Evento } from '../interface/evento';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent {

  @Input() newEvento!: Evento;
  @Output() eventAfegit = new EventEmitter<void>();

  afegirEvent() {
    this.eventAfegit.emit();
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
    this.newEvento.image = reader.result as string;
    });
    }

  constructor() { }


}
