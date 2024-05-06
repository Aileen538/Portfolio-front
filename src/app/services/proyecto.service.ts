import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { Proyectos } from '../interfaces/proyectos.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'http://localhost:3040/api/proyectos/';

  constructor(private httpClient: HttpClient) { }

  getProyectos(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.apiUrl);
  }
  // getByCategory(categoria: string) {
  //   return firstValueFrom(
  //     this.httpClient.get<Proyectos[]>(`${this.apiUrl}/proyectos/category/${categoria}`)
  //   )
  // }
  getByCategory(categoria: string): Observable<Proyectos[]> {
    // Concatenamos la categoría a la URL para obtener solo proyectos de esa categoría
    const url = `${this.apiUrl}?categoria=${categoria}`;
    return this.httpClient.get<Proyectos[]>(`${this.apiUrl}/categoria/${categoria}`)
  }
}
