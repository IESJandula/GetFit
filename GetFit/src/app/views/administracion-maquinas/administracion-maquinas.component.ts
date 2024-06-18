import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaquinaService } from '../../services/maquina.service';
import { Maquina } from '../../interfaces/Maquina.interface';

@Component({
  selector: 'app-administracion-maquinas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administracion-maquinas.component.html',
  styleUrl: './administracion-maquinas.component.css'
})
export class AdministracionMaquinasComponent implements OnInit{
  maquinas?: Maquina[];
  mostrarFormulario: boolean = false;
  nuevaMaquina: Maquina = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagenURL: ''
  }

  constructor(private maquinaService: MaquinaService) {}

  ngOnInit(): void {
    this.fetchMaquinas();
  }

  private fetchMaquinas() {
    this.maquinaService.findAll().subscribe({
      next: value => {
        this.maquinas = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }

  createMaquina() {
    this.maquinaService.create(this.nuevaMaquina).subscribe({
      next: () => {
        this.fetchMaquinas();
        this.nuevaMaquina = {
          id: 0,
          nombre: '',
          descripcion: '',
          imagenURL: ''
        };
        this.mostrarFormulario = false;
      },
      error: error => {
        console.error(error);
      }
    })
  }

  deleteMaquina(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta máquina?')) {
      this.maquinaService.deleteById(id).subscribe({
        next: () => {
          // Vuelve a cargar la lista de máquinas después de eliminar
          this.fetchMaquinas
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
