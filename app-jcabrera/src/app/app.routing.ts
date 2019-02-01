import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contactos/contacto.component';

const appRoutes: Routes = [
    {path: '', component: ContactoComponent },
    {path: 'home', component: ContactoComponent },
    {path: 'home/:page', component: ContactoComponent },
    {path: 'tienda', component: TiendaComponent },
    {path: '**', component: ContactoComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

