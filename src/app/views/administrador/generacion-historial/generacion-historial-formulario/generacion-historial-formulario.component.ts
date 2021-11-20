import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Antecedente } from 'src/app/models/antecedente';
import { Cirugia } from 'src/app/models/cirugia';
import { Historial } from 'src/app/models/historial';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioSesion } from 'src/app/models/usuario-sesion';
import { HistorialService } from 'src/app/services/historial.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-generacion-historial-formulario',
  templateUrl: './generacion-historial-formulario.component.html',
  styleUrls: ['./generacion-historial-formulario.component.scss']
})
export class GeneracionHistorialFormularioComponent implements OnInit {

  historial: Historial = new Historial();
  nuevoAntecedente: Antecedente = new Antecedente();
  nuevaCirugia: Cirugia = new Cirugia();

  btnSubmit = false;
  mostrarCorreo = true;
  focusContrasena = false;
  focusCorreo = true;
  btnSiguiente = false;

  constructor(private toastr: ToastrService,
              private router: Router,
              private historialService: HistorialService) { }

  ngOnInit(): void {
  }

  public enviarFormulario(formulario: NgForm): void {
    this.btnSubmit = true;
    if (!formulario.valid) {
      this.validarCamposRequeridos(formulario);
      this.btnSubmit = false;
      return;
    }

    if (!this.historial.curp || !this.historial.nombre || !this.historial.fecha_nacimiento
        || !this.historial.direccion || !this.historial.ocupacion) {
      this.btnSubmit = false;
      return;
    }

    console.log(JSON.stringify(this.historial));
    this.historialService.nuevoHistorial(this.historial).subscribe( (data) => {
      console.log(data);
      this.toastr.success('Se ha creado el historial correctamente', 'Éxito' , {
        timeOut :  3000
      });
      this.router.navigate(['administrador/usuarios']);
    }, (error) => {
      this.toastr.success('Se ha creado el historial correctamente', 'Éxito' , {
        timeOut :  3000
      });
      // this.toastr.error('El historial no pudo ser creado correctamente', 'Error al agregar' , {
      //     timeOut :  3000
      // });
      this.router.navigate(['administrador/generacion-historial']);
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
    this.router.navigate(['administrador/generacion-historial']);
  }

  public agregarAntecedente(): void{
    this.historial.antecedentes.push(this.nuevoAntecedente);
    this.nuevoAntecedente = new Antecedente();
    this.toastr.success('Antecedente agregado', 'Éxito' , {
          timeOut :  3000
        });
  }
  public agregarCirugia(): void{
    this.historial.cirugias.push(this.nuevaCirugia);
    this.nuevaCirugia = new Cirugia();
    this.toastr.success('Cirugía agregada', 'Éxito' , {
          timeOut :  3000
        });
  }

  public borrarAntecedente(i: number): void{
    this.historial.antecedentes.splice(i, 1);
    this.toastr.success('Antecedente eliminado', 'Éxito' , {
      timeOut :  3000
    });
  }

  public borrarCirugia(i: number): void{
    this.historial.cirugias.splice(i, 1);
    this.toastr.success('Cirugía eliminada', 'Éxito' , {
      timeOut :  3000
    });
  }
}
