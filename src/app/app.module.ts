import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventoFilterPipe } from './pipes/evento-filter.pipe';

import { FormsModule } from '@angular/forms';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventoFilterPipe,
    EventoItemComponent,
    EventoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
