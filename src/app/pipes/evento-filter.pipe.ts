import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interface/evento';

@Pipe({
  name: 'eventoFilter'
})
export class EventoFilterPipe implements PipeTransform {

  transform(eventos: Evento[], filterBy: string): Evento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
if (filter) {
return eventos
.filter(prod => prod.title.toLocaleLowerCase().includes(filter))
}
return eventos;
  }

}
