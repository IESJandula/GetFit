import { Pipe, PipeTransform } from '@angular/core';
import { Respuesta } from '../interfaces/Respuesta.interface';

@Pipe({
  name: 'filterByPregunta',
  standalone: true
})
export class FilterByPreguntaPipe implements PipeTransform {

  transform(respuestas: Respuesta[], preguntaId: number): Respuesta[] {
    return respuestas.filter( respuesta => respuesta.id === preguntaId )
  }

}
