import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioSesion } from 'src/app/models/usuario-sesion';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.scss']
})
export class UsuarioFormularioComponent implements OnInit {

  usuario: UsuarioSesion = new UsuarioSesion();
  btnSubmit = false;
  mostrarCorreo = true;
  focusContrasena = false;
  focusCorreo = true;
  btnSiguiente = false;

  constructor(private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public enviarFormulario(formulario: NgForm): void {
    this.btnSubmit = true;
    if (!formulario.valid) {
      this.validarCamposRequeridos(formulario);
      this.btnSubmit = false;
      return;
    }

    if (!this.usuario.user || !this.usuario.password || !this.usuario.name) {
      this.btnSubmit = false;
      return;
    }

    this.usuarioService.nuevoUsuario(this.usuario).subscribe( (data) => {
      console.log(data);
      this.toastr.success('Se ha agregado el usuario correctamente', 'Éxito' , {
        timeOut :  3000
      });
      this.router.navigate(['administrador/usuarios']);
    }, (error) => {
      this.toastr.error('El usuario no pudo ser agregado correctamente', 'Error al agregar' , {
        timeOut :  3000
      });
    });
  }

  validarCamposRequeridos(formulario: NgForm): void {
    Object.keys(formulario.controls).forEach((nombre) => {
      const control = formulario.controls[nombre];
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
  }
  public cancelar(): void {
    this.router.navigate(['administrador/usuarios']);
  }
}
