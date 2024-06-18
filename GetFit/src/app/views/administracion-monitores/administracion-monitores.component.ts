  import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { Monitor } from '../../interfaces/Monitor.interface';
  import { MonitorService } from '../../services/monitor.service';
  import { HttpHeaders } from '@angular/common/http';

  @Component({
    selector: 'app-administracion-monitores',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './administracion-monitores.component.html',
    styleUrl: './administracion-monitores.component.css'
  })
  export class AdministracionMonitoresComponent implements OnInit {

    monitores?: Monitor[];

    nuevoMonitor: Monitor = {
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: ''
    };

    constructor(private monitorService: MonitorService) {}

    ngOnInit(): void {
      this.fetchMonitores();
    }

    fetchMonitores() {
      this.monitorService.findAll().subscribe({
        next: value => {
          this.monitores = value;
          console.log(value);
        },
        error: error => {
          console.error(error);
        }
      })
    }

    createMonitor() {
      this.monitorService.create(this.nuevoMonitor).subscribe({
        next: () => {
          this.fetchMonitores();
          this.nuevoMonitor = {
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

    deleteMonitor(id: number) {
      if (confirm('¿Estás seguro de que quieres eliminar este monitor?')) {
        this.monitorService.deleteById(id).subscribe({
          next: () => {
            this.fetchMonitores();
          },
          error: error => {
            console.error(error);
          }
        })
      }
    }

    mostrarFormulario: boolean = false;

    muestraFormulario() {
      this.mostrarFormulario = !this.mostrarFormulario;
    }
  }
