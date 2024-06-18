import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }

  create(usuario: Usuario): Observable<any> {
    return this.http.post(this.baseUrl, usuario);
  }

  update(usuario: Usuario): Observable<any> {
    return this.http.put(this.baseUrl, usuario);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
