import { Component, OnInit } from '@angular/core';
import { Instalacion } from '../../interfaces/Instalacion.interface';
import { InstalacionesService } from '../../services/instalaciones.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../interfaces/Usuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-instalaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './card-instalaciones.component.html',
  styleUrl: './card-instalaciones.component.css'
})
export class CardInstalacionesComponent implements OnInit {

  instalaciones?: Instalacion[];
  mostrarFormulario: boolean = false;
  currentUser: Usuario | null;
  nuevaInstalacion: Instalacion = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: ''
  }

  constructor(private instalacionesService: InstalacionesService) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  ngOnInit(): void {
    this.fetchInstalaciones();
  }

  private fetchInstalaciones() {
    this.instalacionesService.findAll().subscribe({
      next: value => {
        this.instalaciones = value;
        console.log(value);
      },
      error: error => {console.error(error)}
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

  muestraFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}
