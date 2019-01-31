import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent {
    public titulo = 'Pagina de Contacto';
    public parametro: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(){
        //funcion de callback
        //funciones arrow, permiten acceder a objetos fuera.

        this._route.params.forEach((params: Params) => {
            console.log(params);
            this.parametro = params['page'];

        });
    }

    redirigir(){
        this._router.navigate(['/contacto','Jorge Cabrera']);
    }
}
