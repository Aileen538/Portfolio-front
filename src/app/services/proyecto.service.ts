import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { Proyectos } from '../interfaces/proyectos.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  // private apiUrl = 'http://localhost:3040/api/proyectos/';
  private apiUrl = 'https://cvback-aileen.onrender.com/api/proyectos';


  constructor(private httpClient: HttpClient) { }

  getProyectos(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.apiUrl);
  }

  getByCategory(categoria: string): Observable<Proyectos[]> {

    const url = `${this.apiUrl}?categoria=${categoria}`;
    return this.httpClient.get<Proyectos[]>(`${this.apiUrl}/categoria/${categoria}`)
  }
}
