import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventoFilterPipe } from './pipes/evento-filter.pipe';

import { FormsModule } from '@angular/forms';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';

import {HttpClientModule} from '@angular/common/http';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { EventoService } from './services/evento.service';
import { AuthInterceptorService} from './services/auth-interceptor.service';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [
{
  provide: HTTP_INTERCEPTORS,
  useClass: BaseUrlInterceptor,
  multi: true,
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
