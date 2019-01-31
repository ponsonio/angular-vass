import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

    public nombre_prenda = 'Camiseta';
    public coleccion_ropa = ['medias', 'boxers', 'polo'];

    prueba(nombre_prenda: string) {
        this.nombre_prenda = nombre_prenda;
        return this.nombre_prenda;
    }

    addRopa(nombre_prenda: string): Array<String> {
        this.coleccion_ropa.push(nombre_prenda);
        return this.coleccion_ropa;
    }

    getRopa() {
        return this.coleccion_ropa;
    }


}