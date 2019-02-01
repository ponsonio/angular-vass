import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform {

    transform(value: string, por: string) {
        let one = parseInt(value);
        let two = parseInt(por);

        let result = 'El producto de ' + one + ' por ' +
        two +  ' da :' + (one * two) ;

        return result;
    }
}

