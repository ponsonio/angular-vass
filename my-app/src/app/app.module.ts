import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
