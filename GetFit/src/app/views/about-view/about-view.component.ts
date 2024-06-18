import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pregunta } from '../../interfaces/Pregunta.interface';
import { PreguntaService } from '../../services/pregunta.service';
import { Usuario } from '../../interfaces/Usuario.interface';
import { CardMonitoresComponent } from '../../components/card-monitores/card-monitores.component';
import { CardInstalacionesComponent } from '../../components/card-instalaciones/card-instalaciones.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Respuesta } from '../../interfaces/Respuesta.interface';
import { RespuestaService } from '../../services/respuesta.service';
import { FilterByPreguntaPipe } from '../../pipes/filter-by-pregunta.pipe';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, CardMonitoresComponent, CardInstalacionesComponent, FooterComponent, FilterByPreguntaPipe,],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutViewComponent implements OnInit {

  preguntas?: Pregunta[];
  respuestas?: Respuesta[];
  hayRespuesta: boolean = false;

  nuevaPregunta: Pregunta = {
    id: 0,
    usuario: '',
    asunto: '',
    pregunta: ''
  };

  nuevaRespuesta: Respuesta = {
    id: 0,
    monitor: '',
    respuesta: ''
  };

  currentUser: Usuario | null;

  constructor(
    private preguntaService: PreguntaService,
    private respuestaService: RespuestaService,
  ) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  ngOnInit(): void {
    this.fetchPreguntas();
    this.fetchRespuestas();
  }

  private fetchPreguntas() {
    this.preguntaService.findAll().subscribe({
      next: value => {
        this.preguntas = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }

  private fetchRespuestas() {
    this.respuestaService.findAll().subscribe({
      next: value => {
        this.respuestas = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }

  createPregunta() {
    this.preguntaService.create(this.nuevaPregunta).subscribe({
      next: () => {
        this.fetchPreguntas();
        this.nuevaPregunta = {
          id: 0,
          usuario: '',
          asunto: '',
          pregunta: ''
        };
      },
      error: error => {
        console.error(error);
      }
    })
  }

  createRespuesta(preguntaId: number) {
    this.nuevaRespuesta.id = preguntaId;
    this.nuevaRespuesta.monitor = this.currentUser?.nombre || '';
    this.respuestaService.create(this.nuevaRespuesta).subscribe({
      next: () => {
        this.fetchRespuestas();
        this.nuevaRespuesta = {
          id: 0,
          monitor: '',
          respuesta: ''
        };
      },
      error: error => {
        console.error(error);
      }
    })
  }

  tieneRespuesta(): void {
    if (!this.respuestas) {
      this.hayRespuesta = false;
    } else {
      this.hayRespuesta = true;
    }
  }




}
