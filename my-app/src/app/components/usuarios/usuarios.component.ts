import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ArgumentType } from '@angular/compiler/src/core';

@Component({
    selector: 'usuarios-component',
    templateUrl: './usuarios.component.html',
    providers: [UsuarioService]
})
export class UsuariosComponent {

    public usuario: Usuario;
    public usuarios;
    public id;

    constructor(
        private _usuarioService: UsuarioService
    ) {
        this.usuario = new Usuario(0, '', 18, '', '');
    }

    onSubmit() {
        console.log('crear usuario' + this.usuario);
        this._usuarioService.crearUsuario(this.usuario).subscribe(
            (data) => {
                console.log('cliente creado' + this.usuario);
       });
    }

    ngOnInit() {
        console.log(this._usuarioService.getPrueba());

        this._usuarioService.getUsuarios().subscribe(
            result => {
                this.usuarios = result;
                if (!this.usuarios) {
                    console.log('error en el servidor');
                }
                console.log(result);
            },
            error => {
                const errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
    }

    eliminar() {
        this._usuarioService.eliminarUsuario(this.id).subscribe(
            (data) => {
                console.log('cliente eliminado' + this.id);
       });
    }
 
}

