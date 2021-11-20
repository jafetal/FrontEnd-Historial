import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Antecedente } from 'src/app/models/antecedente';
import { Cirugia } from 'src/app/models/cirugia';
import { Documento } from 'src/app/models/documento';
import { Historial } from 'src/app/models/historial';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioSesion } from 'src/app/models/usuario-sesion';
import { HistorialService } from 'src/app/services/historial.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-historial-formulario',
  templateUrl: './historial-formulario.component.html',
  styleUrls: ['./historial-formulario.component.scss']
})
export class HistorialFormularioComponent implements OnInit {

  historial: Historial = new Historial();
  nuevoAntecedente: Antecedente = new Antecedente();
  nuevaCirugia: Cirugia = new Cirugia();
  documentos: Documento[] = [];

  btnSubmit = false;
  mostrarCorreo = true;
  focusContrasena = false;
  focusCorreo = true;
  btnSiguiente = false;

  curp = '';

  constructor(private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private historialService: HistorialService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.curp = params.curp;
      this.consultar();
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
    this.router.navigate(['administrador/consulta-historial']);
  }

  consultar(): void{
    console.log(this.curp)
    this.historialService.consultarHistorial(this.curp).subscribe( data => {
      this.historial = data[0];
      this.historial.antecedentes = data[1];
      this.historial.cirugias = data[2];
      this.documentos = data[3];
    }, (error) => {
      this.historial = error;
    });
  }
}
