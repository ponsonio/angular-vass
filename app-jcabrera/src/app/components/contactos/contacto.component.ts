import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component( {
    selector: 'contacto-component',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent {

    public parametro: string ;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        console.log('Constructor contactos');
    }
    ngOnInit() {
        this._route.params.forEach(
            (params: Params) => {
                console.log(params);
                this.parametro = params['page'];
            }
        );
    }

    redirigir() {
        this._router.navigate(['/home', '2']);
    }

}
