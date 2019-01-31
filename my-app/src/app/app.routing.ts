import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TiendaComponent } from './components//tienda/tienda.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'tienda', component: TiendaComponent },
    {path: 'contacto', component: ContactoComponent },
    {path: 'contacto/:page', component: ContactoComponent },
    {path: 'home', component: HomeComponent },
    {path: '**' , component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


