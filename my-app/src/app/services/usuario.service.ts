import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

import { Usuario } from '../components/usuarios/usuario';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class UsuarioService {

    public url: string = 'http://localhost:3000/api/users/';

    constructor(
        private _httpClient: HttpClient) {

    }

    getPrueba() {
        return 'Hola desde el servicio';
    }
    
    getUsuarios() {
        return this._httpClient.get(this.url)
            .map(
                res => res
            );
    }

    eliminarUsuario(id) {
        const url = `${this.url}${id}`;
        console.log('url' + url);
        return this._httpClient.delete(url);
    }

    crearUsuario(usuario: Usuario) {
        return this._httpClient.post(this.url, usuario, httpOptions);
    }
}
