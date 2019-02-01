import { Component } from '@angular/core';
import { Producto } from './producto';
import { TiendaService } from '../../services/producto.component';

@Component( {
    selector: 'tienda-component',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    providers: [TiendaService]
})
export class TiendaComponent {

    public nombre: string = "Tienda Vass";
    public flag: boolean = false;
    public productos: Array<Producto>;
    public color: string ;
    public color_usuario: string;
    public quantity: number;
    public price: number;
    public mensaje: string;

    public fecha: Date;

    constructor(
        private _tiendaService: TiendaService
    ) {
        console.log(_tiendaService.prueba());
        console.log(this.productos);
    }

    ngOnInit() {
        this.flag = false;
        this.color = 'red';
        this.color_usuario =  '#ccc';
        this.productos = this._tiendaService.obtenerProductos();
        this.quantity = 10;
        this.price = 15;
        this.mensaje = this._tiendaService.prueba();
        this.fecha = new Date(1, 1, 2019);
    }

    imprimir(mensaje: string) {
        console.log('El mensaje es ' + mensaje);
        this.nombre = this.nombre + '-' + mensaje;
    }

    mostrar() {
        this.flag = true;
    }
}