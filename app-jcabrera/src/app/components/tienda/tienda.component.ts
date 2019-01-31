import { Component } from '@angular/core';
import { Producto } from './producto';

@Component( {
    selector: 'tienda-component',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {

    public nombre: string = "Tienda Vass";
    public flag: boolean = false;
    public productos: Array<Producto>;
    public color: string ;
    public color_usuario: string;
    public quantity: number;
    public price: number;

    constructor() {

        console.log(this.productos);
    }

    ngOnInit() {
        this.flag = false;
        this.color = 'red';
        this.color_usuario =  '#ccc';
        this.productos = [
            new Producto('mochila', 100, true),
            new Producto('cuaderno', 10, true),
            new Producto('lapiz', 1, false)
        ];
        this.quantity = 10;
        this.price = 15;
    }

    imprimir(mensaje: string) {
        console.log('El mensaje es ' + mensaje);
        this.nombre = this.nombre + '-' + mensaje;
    }

    mostrar() {
        this.flag = true;
    }
}