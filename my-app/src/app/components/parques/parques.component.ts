import { Component } from '@angular/core';

@Component( {
    selector: 'parques-component',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent {
    public nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;


    constructor() {
        this.nombre = 'Parque de las leyendas';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }

}

