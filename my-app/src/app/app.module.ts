import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import {UsuariosComponent } from './components/usuarios/usuarios.component';

import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    ConversorPipe,
    PlantillasComponent,
    UsuariosComponent,
    CochesComponent
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
