import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from '../interfaces/Monitor.interface';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  baseUrl = 'http://localhost:8080/monitores'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(`${this.baseUrl}`);
  }

  create(monitor: Monitor): Observable<any> {
    return this.http.post(this.baseUrl, monitor);
  }

  update(monitor: Monitor): Observable<any> {
    return this.http.put(this.baseUrl, monitor);
  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
