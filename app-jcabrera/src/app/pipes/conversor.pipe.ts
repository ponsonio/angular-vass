import { Pipe , PipeTransform } from '@angular/core';

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform {



    transform(value: string, ...numbers: string[] ) {

        let uno =  parseInt(value);
        let dos =  parseInt(numbers[0]);
        let tres =  parseInt(numbers[1]);

        let result = 'El producto de ' + uno + ' por ' +
        dos +  ' da :' + (uno * dos* tres) ;

        return result;

    }
}
