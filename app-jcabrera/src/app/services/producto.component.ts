import { Injectable } from '@angular/core';
import { Producto } from '../components/tienda/producto';

@Injectable()
export class TiendaService {

    public productos: Array<Producto>;

    constructor() {
        this.productos = [
            new Producto('mochila', 100, true),
            new Producto('cuaderno', 10, true),
            new Producto('lapiz', 1, false)
        ];
    }

    obtenerProductos() {
        return this.productos;
    }

     prueba() {
        return 'hola soy un servicio';
    }
}
