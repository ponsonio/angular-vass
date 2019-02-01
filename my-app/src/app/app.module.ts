import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CochesComponent } from './components/coches/coches.component';

import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    ConversorPipe,
    CochesComponent
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
