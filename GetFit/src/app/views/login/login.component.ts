import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuarios?: Usuario[];
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsuarios();
  }

  private fetchUsuarios() {
    this.usuarioService.findAll().subscribe({
      next: value => {
        this.usuarios = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }

  iniciarSesion() {
    const usuario = this.usuarios?.find(u => u.email === this.email && u.password === this.password);
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate(['/']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

}
