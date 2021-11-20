import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-layout-administrador',
  templateUrl: './layout-administrador.component.html',
  styleUrls: ['./layout-administrador.component.scss']
})
export class LayoutAdministradorComponent implements OnInit {
  status = false;
  usuario: Usuario = new Usuario();
  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.usuarioEnSesion();
  }

  public clickEvent(): void{
      this.status = !this.status;
  }

  public logout(): void {
    localStorage.removeItem('usuarioIniciado');
    this.toastr.success('Se cerrado sesión correctamente', 'Hasta luego' , {
      timeOut :  3000
    });
    this.router.navigate(['/login']);
  }

  public usuarioEnSesion(): void{
    this.usuario = JSON.parse( localStorage.getItem('usuarioIniciado') || '{}');
    console.log(this.usuario);
  }

  public cambiarPagina(pagina: string): void{
    this.router.navigate(['administrador/' + pagina]);
  }
}
