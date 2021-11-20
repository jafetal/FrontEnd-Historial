import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generacion-historial',
  templateUrl: './generacion-historial.component.html',
  styleUrls: ['./generacion-historial.component.scss']
})
export class GeneracionHistorialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public nuevoHistorial(): void{
    this.router.navigate(['administrador/generacion-historial/nuevo']);
  }

}
