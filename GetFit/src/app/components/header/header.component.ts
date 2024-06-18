import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Usuario } from '../../interfaces/Usuario.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  currentUser: Usuario | null;

  constructor(private router: Router) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  usuarioLogueado(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['login']);
  }
}
