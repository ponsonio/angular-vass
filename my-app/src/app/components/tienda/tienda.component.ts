
import { Component } from '@angular/core';
import { Empleado } from './empleado';


@Component( {
    selector: 'tienda-component',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
    public titulo: string;
    public productos: Array<String> = ['iPhone1', 'iPhone2', 'iPhone3'];
    private servidor;
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public mostrarEmpleado = false;
    public color: string;
    public color_seleccionado: string;




    constructor() {
        this.color = 'red';
        this.titulo = 'Bienvenidos a mi tienda';
        this.color_seleccionado = '#ccc';
        console.log(this.productos);
    }

    ngOnInit() {
        console.log("ngOnInit");
        this.empleado = new Empleado('jorge', 41);
        console.log(this.empleado);
        this.trabajadores = [
            new Empleado('Jorge', 33),
            new Empleado('Lina', 34),
            new Empleado('Carmen', 35),
        ];
        console.log(this.trabajadores);
    }

    mostrarDatosEmpleado(valor: boolean) {
        this.mostrarEmpleado = valor;
    }

    log(mensaje: string) {
        console.log('log -->' + mensaje);
    }
}
