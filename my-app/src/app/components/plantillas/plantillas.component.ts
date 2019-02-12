import { Component } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})
export class PlantillasComponent {

    public articulos;

    public titulo: string;
    public administrador: boolean;

    constructor(
    ) {
        this.titulo = 'NG Template';
        this.administrador = false;
    }

    cambiar() {
        this.administrador = !this.administrador;
    }
}

