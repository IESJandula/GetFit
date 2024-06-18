import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquina } from '../interfaces/Maquina.interface';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  baseUrl = 'http://localhost:8080/maquinas';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Maquina[]> {
    return this.http.get<Maquina[]>(`${this.baseUrl}`);
  }

  create(maquina: Maquina): Observable<any> {
    return this.http.post(this.baseUrl, maquina);
  }

  update(maquina: Maquina): Observable<any> {
    return this.http.put(this.baseUrl, maquina);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
