import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.consultarTodosLosUsuarios();
  }

  public consultarTodosLosUsuarios(): void{
    this.usuarioService.consultarTodos().subscribe( data => {
      this.usuarios = data;
    });
  }

  public nuevoUsuario(): void{
    this.router.navigate(['administrador/usuarios/nuevo']);
  }
}
