import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../../services/peticiones.service';
import { ArgumentType } from '@angular/compiler/src/core';

@Component({
    selector: 'coches-component',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent {

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesService

    ) {
        this.coche = new Coche('', '', '');
        
        this.coches = [
            new Coche('Toyota', '120', 'blanco'),
            new Coche('Subaru', '120', 'gris')
        ];
    }

    onSubmit() {
        console.log(this.coche);
        this.coches.push(this.coche);
        this.coche = new Coche('', '', '');
    }

    ngOnInit() {
        console.log(this._peticionesService.getPrueba());

    this._peticionesService.getArticulos().subscribe(
        result => {
            this.articulos = result;
            if (!this.articulos) {
                console.log('error en el servidor');
            }
            console.log(result);
        },
        error => {
            var errorMensaje = <any>error;
            console.log(errorMensaje);
        }
    );
    }
 
}

