import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';

import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contactos/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ContactoComponent
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
