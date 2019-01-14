import { Component } from '@angular/core';

@Component( {
    selector: 'tienda-component',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
    public titulo;

    constructor() {
        this.titulo = 'Bienvenidos a mi tienda';
    }

}
