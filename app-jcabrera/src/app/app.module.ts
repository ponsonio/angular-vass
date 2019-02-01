import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';

import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contactos/contacto.component';

import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ContactoComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
