import { Component } from '@angular/core';
import {Auto} from './auto';
import {TiendaService} from '../../services/producto.component';


@Component({
    selector: 'autos-component',
    templateUrl: './autos.component.html',
    providers: [TiendaService]
})
export class AutosComponent {

    public auto: Auto;
    public autosList: Array<Auto>;

    public articulos;

    constructor(
        private _tiendaService: TiendaService
    ) {
        this.auto = new Auto('', '', '', '');

    }

    ngOnInit() {
        this.autosList = [
            new Auto('Honda', 'Civic', '1992', 'negro')
        ];
        console.log('Controlador de autos');
        console.log(this.autosList);

        console.log(this._tiendaService.getArticulos());

        this._tiendaService.getArticulos().subscribe(
                result => {
                    this.articulos = result;
                    console.log(result);
                }

            ,
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );

    }

    onSubmit() {
        console.log(this.auto);
        this.autosList.push(this.auto);
    }

}
