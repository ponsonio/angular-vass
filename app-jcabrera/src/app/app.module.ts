import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contactos/contacto.component';
import { AutosComponent } from './components/autos/autos.component';


import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ContactoComponent,
    AutosComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
