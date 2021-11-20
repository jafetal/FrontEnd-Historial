import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-consulta-historial',
  templateUrl: './consulta-historial.component.html',
  styleUrls: ['./consulta-historial.component.scss']
})
export class ConsultaHistorialComponent implements OnInit {
  curp = '';
  constructor(private router: Router,
              private toastr: ToastrService,
              private historialService: HistorialService) { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.historialService.consultarHistorial(this.curp).subscribe( data => {
      console.log('Despues de la consulta: ');
      console.log(data);
      this.router.navigate(['administrador/consulta-historial/consultar'], { queryParams: { curp: this.curp.toString() } });
    },(error) => {
      this.toastr.error('No existe un Historial con este CURP');
    });
  }
}
