import { Component } from '@angular/core';
import { RopaService } from '../../services/ropa.service';
import { ProvidersFeature } from '@angular/core/src/render3';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {
    public titulo = 'Pagina Principal';
    public listado_ropa: Array<String>;
    public nueva_prenda: string;

    constructor(
        private _ropaService: RopaService
    ){}

    ngOnInit() {
        console.log(this._ropaService.prueba('zapato'));
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    addPrenda() {
        this._ropaService.addRopa(this.nueva_prenda);
    }
}
