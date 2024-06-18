import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/Respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private baseUrl: string = 'https://localhost:8080/respuestas';

  constructor( private http: HttpClient ) { }

  findAll(): Observable<Respuesta[]> {
    return this.http.get<Respuesta[]>(`${this.baseUrl}`);
  }

  create(respuesta: Respuesta): Observable<any> {
    return this.http.post(this.baseUrl, respuesta);
  }

  update(respuesta: Respuesta): Observable<any> {
    return this.http.put(this.baseUrl, respuesta);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
