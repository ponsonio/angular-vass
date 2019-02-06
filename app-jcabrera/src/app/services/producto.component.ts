import { Injectable } from '@angular/core';
import { Producto } from '../components/tienda/producto';

import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators' ;
import {Observable} from 'rxjs/observable';

@Injectable()
export class TiendaService {
    private url: string = 'https://jsonplaceholder.typicode.com/posts';
    public productos: Array<Producto>;

    constructor(
        private _httpClient: HttpClient
    ) {

    }

    obtenerProductos() {
        return this.productos;
    }

     prueba() {
        return 'hola soy un servicio';
    }

    getArticulos() {
        return this._httpClient.get(this.url)
            .pipe(map(
                res => res
            )
            );
    }

}
