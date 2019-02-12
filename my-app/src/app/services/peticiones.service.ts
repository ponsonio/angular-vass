import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class PeticionesService {

    //public url: string = 'https://jsonplaceholder.typicode.com/posts';
    public url: string = 'http://localhost:3000/api/users/';
    

    constructor(
        private _httpClient: HttpClient) {

    }

    getPrueba() {
        return 'Hola desde el servicio';
    }
    
    getArticulos() {
        return this._httpClient.get(this.url)
            .map(
                res => res
            );
    }
}
