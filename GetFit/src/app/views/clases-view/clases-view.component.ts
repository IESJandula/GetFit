import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Clases } from '../../interfaces/Clases.interface';
import { ClasesService } from '../../services/clases.service';
import { Usuario } from '../../interfaces/Usuario.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clases-view',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './clases-view.component.html',
  styleUrl: './clases-view.component.css'
})
export class ClasesViewComponent implements OnInit {

  clases?: Clases[];

  currentUser: Usuario | null;

  nuevaClase: Clases = {
    id: 0,
    nombre: '',
    descripcion: '',
    fechaInicio: new Date(),
    hora: '',
    alumnos: []
  }

  constructor(private clasesService: ClasesService) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  ngOnInit(): void {
    this.fetchClases();
  }

  private fetchClases() {
    this.clasesService.findAll().subscribe({
      next: value => {
        this.clases = value;
        console.log(value);
      },
      error: error => {
        console.error(error);
      }
    })
  }

  createClase() {
    this.clasesService.create(this.nuevaClase).subscribe({
      next: () => {
        this.fetchClases();
        this.nuevaClase = {
          id: 0,
          nombre: '',
          descripcion: '',
          fechaInicio: new Date(),
          hora: '',
          alumnos: []
        };
        this.mostrarFormulario = false;
      },
      error: error => {
        console.error(error);
      }
    })
  }

  deleteClase(id: number) {
    if (confirm('¿Estás seguro que quieres eliminar esta clase?')) {
      this.clasesService.deleteById(id).subscribe({
        next: () => {
          this.fetchClases();
        },
        error: error => {
          console.error(error);
        }
      })
    }
  }

  apuntarme(clase: Clases) {
    if (this.currentUser) {
      if (clase.alumnos.includes(this.currentUser.nombre)) {
        console.error('Usuario ya apuntado a la clase');
        return;
      }
      clase.alumnos.push(this.currentUser.nombre);  // Agregar nombre del usuario a la lista de alumnos
      this.clasesService.update(clase).subscribe({
        next: () => {
          console.log('Usuario apuntado correctamente');
          window.location.reload(); // Recargar la página después de apuntarse
        },
        error: error => {
          console.error('Error al apuntar al usuario', error);
        }
      });
    } else {
      console.error('Usuario no autenticado');
    }
  }

  mostrarFormulario: boolean = false;

    muestraFormulario() {
      this.mostrarFormulario = !this.mostrarFormulario;
    }

}
