import { Component, OnInit } from '@angular/core';
import { Instalacion } from '../../interfaces/Instalacion.interface';
import { InstalacionesService } from '../../services/instalaciones.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administracion-instalaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administracion-instalaciones.component.html',
  styleUrl: './administracion-instalaciones.component.css'
})
export class AdministracionInstalacionesComponent implements OnInit {
  instalaciones?: Instalacion[];
  mostrarFormulario: boolean = false;
  nuevaInstalacion: Instalacion = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: ''
  }

  constructor(private instalacionesService: InstalacionesService) { }

  ngOnInit(): void {
    this.fetchInstalaciones();
  }

  private fetchInstalaciones() {
    this.instalacionesService.findAll().subscribe({
      next: value => {
        this.instalaciones = value;
        console.log(value);
      },
      error: error => {
        console.error(error);
      }
    })
  }

  createInstalacion() {
    this.instalacionesService.create(this.nuevaInstalacion).subscribe({
      next: () => {
        this.fetchInstalaciones;
        this.nuevaInstalacion = {
          id: 0,
          nombre: '',
          descripcion: '',
          imagen: ''
        };
        this.mostrarFormulario = false;
      },
      error: error => {
        console.error(error);
      }
    })
  }

  deleteMaquina(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta instalación?')) {
      this.instalacionesService.deleteById(id).subscribe({
        next: () => {
          this.fetchInstalaciones();
        },
        error: error => {
          console.error(error);
        }
      })
    }
  }

  muestraFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
}
