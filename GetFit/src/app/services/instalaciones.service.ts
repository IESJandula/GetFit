import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instalacion } from '../interfaces/Instalacion.interface';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  baseUrl = 'http://localhost:8080/instalaciones';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Instalacion[]> {
    return this.http.get<Instalacion[]>(`${this.baseUrl}`);
  }

  create(instalacion: Instalacion): Observable<any> {
    return this.http.post(this.baseUrl, instalacion);
  }

  update(instalacion: Instalacion): Observable<any> {
    return this.http.put(this.baseUrl, instalacion);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
