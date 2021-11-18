import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-layout-administrador',
  templateUrl: './layout-administrador.component.html',
  styleUrls: ['./layout-administrador.component.scss']
})
export class LayoutAdministradorComponent implements OnInit {

  status = false;
  usuario: Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }

  public clickEvent(): void{
      this.status = !this.status;
  }

}
