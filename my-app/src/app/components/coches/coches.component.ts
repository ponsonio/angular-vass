import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
    selector: 'coches-component',
    templateUrl: './coches.component.html'
})
export class CochesComponent {

    public coche: Coche;

    constructor() {
        this.coche = new Coche('', '', '');
    }

    onSubmit() {
        console.log(this.coche);
    }

}

