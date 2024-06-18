import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from '../interfaces/Pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  baseUrl = 'http://localhost:8080/preguntas';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`${this.baseUrl}`);
  }

  create(pregunta: Pregunta): Observable<any> {
    return this.http.post(this.baseUrl, pregunta);
  }

  update(pregunta: Pregunta): Observable<any> {
    return this.http.put(this.baseUrl, pregunta);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
