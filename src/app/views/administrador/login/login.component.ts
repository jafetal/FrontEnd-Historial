import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioSesion } from 'src/app/models/usuario-sesion';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnSubmit = false;
  loginRequest = new UsuarioSesion();
  mostrarCorreo = true;
  focusContrasena = false;
  focusCorreo = true;
  btnSiguiente = false;
  usuarioConsultado = new Usuario();
  inicioFallido = false;

  constructor(private loginService: LoginService,
              private router: Router,
              private toastr: ToastrService
              ) { }

  ngOnInit(): void {
    this.logout();
  }

  public enviarFormulario(formulario: NgForm): void {
    this.btnSubmit = true;
    if (!formulario.valid) {
      this.validarCamposRequeridos(formulario);
      this.btnSubmit = false;
      return;
    }

    if (!this.loginRequest.user || !this.loginRequest.password) {
      this.btnSubmit = false;
      return;
    }

    this.loginService.iniciarSesion(this.loginRequest).subscribe( (data) => {
      localStorage.setItem('usuarioIniciado', JSON.stringify(data));
      this.usuarioConsultado = data;
      this.toastr.success('Se ha iniciado sesión correctamente', 'Bienvenido' , {
        timeOut :  3000
      });
      this.router.navigate(['administrador']);
    }, (error) => {
      this.inicioFallido = true;
      this.toastr.error('Contraseña y/o usuario incorrecto', 'Falló inicio de sesión' , {
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

  public logout(): void {
    localStorage.removeItem('usuarioIniciado');
  }
}


