import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { LoginComponent } from './views/login/login.component';
import { GestorUsuariosComponent } from './views/gestor-usuarios/gestor-usuarios.component';
import { AdministracionMaquinasComponent } from './views/administracion-maquinas/administracion-maquinas.component';
import { AdministracionMonitoresComponent } from './views/administracion-monitores/administracion-monitores.component';
import { AdministracionInstalacionesComponent } from './views/administracion-instalaciones/administracion-instalaciones.component';
import { ClasesViewComponent } from './views/clases-view/clases-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'about',
    component: AboutViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gestorUsuarios',
    component: GestorUsuariosComponent
  },
  {
    path: 'gestorMaquinas',
    component: AdministracionMaquinasComponent
  },
  {
    path: 'gestorMonitores',
    component: AdministracionMonitoresComponent
  },
  {
    path: 'gestorInstalaciones',
    component: AdministracionInstalacionesComponent
  },
  {
    path: 'clases',
    component: ClasesViewComponent
  }
];
