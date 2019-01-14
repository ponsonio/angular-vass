import { Component } from '@angular/core';

@Component( {
    selector: 'tienda',
    template: `
        <h1>{{titulo}}</h1>
        <ul>
            <li>iPhone7</li>
            <li>iPhone8</li>
        <ul>
    `,
    styles: ['h1 {color:blue}']
})

export class TiendaComponent {
    public titulo;

    constructor(){
        this.titulo = 'Bienvenidos a mi tienda';
    }

}