import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clases } from '../interfaces/Clases.interface';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  baseUrl = 'http://localhost:8080/clases';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Clases[]> {
    return this.http.get<Clases[]>(`${this.baseUrl}`);
  }

  create(clase: Clases): Observable<any> {
    return this.http.post(this.baseUrl, clase);
  }

  update(clase: Clases): Observable<any> {
    return this.http.put(`${this.baseUrl}/${clase.id}`, clase);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
