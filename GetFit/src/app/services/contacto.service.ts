import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../interfaces/Contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  baseUrl = 'http://localhost:8080/contacto';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.baseUrl}`);
  }

  create(contacto: Contacto): Observable<any> {
    return this.http.post(this.baseUrl, contacto);
  }

  update(contacto: Contacto): Observable<any> {
    return this.http.put(`${this.baseUrl}/${contacto.id}`, contacto);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
