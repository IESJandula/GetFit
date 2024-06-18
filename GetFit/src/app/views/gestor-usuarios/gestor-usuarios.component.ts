import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interfaces/Contacto.interface';

@Component({
  selector: 'app-gestor-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestor-usuarios.component.html',
  styleUrl: './gestor-usuarios.component.css'
})
export class GestorUsuariosComponent implements OnInit{

  usuarios?: Usuario[];
  contactos?: Contacto[];
  mostrarFormulario: boolean = false;
  nuevoUsuario: Usuario = {
    id: 0,
    email: '',
    password: '',
    nombre: '',
    apellidos: '',
    genero: '',
    edad: 0,
    altura: 0,
    peso: 0,
    rol: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private contactoService: ContactoService,
  ) { }

  ngOnInit(): void {
    this.fetchUsuarios();
    this.fetchContactos();
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

  private fetchContactos() {
    this.contactoService.findAll().subscribe({
      next: value => {
        this.contactos = value;
        console.log(value);
      },
      error: error => {
        console.log(error);
      }
    })
  }

  muestraFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  createUsuario() {
    this.usuarioService.create(this.nuevoUsuario).subscribe({
      next: () => {
        // Actualizar la lista de usuarios después de añadir el nuevo usuario
        this.fetchUsuarios();
        // Limpiar el formulario
        this.nuevoUsuario = {
          id: 0,
          email: '',
          password: '',
          nombre: '',
          apellidos: '',
          genero: '',
          edad: 0,
          altura: 0,
          peso: 0,
          rol: ''
        };
        this.mostrarFormulario = false;
      },
      error: error => {
        console.error(error);
      }
    })
  }

  deleteUsuario(id: number) {
    if (confirm('¿Estás seguro que quieres eliminar esta clase?')) {
      this.usuarioService.deleteById(id).subscribe({
        next: () => {
          this.fetchUsuarios();
        },
        error: error => {
          console.error(error);
        }
      })
    }
  }

}
