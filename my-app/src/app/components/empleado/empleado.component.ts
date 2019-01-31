
import { Component } from '@angular/core';


@Component( {
    selector: 'empleado-component',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
    public titulo: string;


    constructor() {
        this.titulo = 'Empleado Component';
    }

}
