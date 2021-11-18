import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdministradorComponent } from './views/administrador/layout-administrador/layout-administrador.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  // {
  //   path: 'administrador',
  //   loadChildren: () =>
  //         import('./views/administrador/layout-administrador/layout-administrador.module').then(
  //           (m) => m.LayoutAdministradorModule
  //         )
  // },
  {
    path: 'administrador',
    component: LayoutAdministradorComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/administrador/layout-administrador/layout-administrador.module').then(
            (m) => m.LayoutAdministradorModule
          )
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/administrador/login/login.module').then(
        (m) => m.LoginModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
