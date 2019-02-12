import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TiendaComponent } from './components//tienda/tienda.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent}, //Default
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'tienda', component: TiendaComponent },
    {path: 'coches', component: CochesComponent },
    {path: 'plantillas', component: PlantillasComponent },
    {path: 'usuarios', component: UsuariosComponent },
    {path: 'contacto', component: ContactoComponent },
    {path: 'contacto/:page', component: ContactoComponent },
    {path: 'home', component: HomeComponent },
    {path: '**' , component: HomeComponent} //Error
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


