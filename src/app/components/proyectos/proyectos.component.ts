import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Proyectos } from '../../interfaces/proyectos.interface';
import { ProyectoService } from '../../services/proyecto.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {


  proyectos: Proyectos[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }



  obtenerProyectos() {
    this.proyectoService.getProyectos().subscribe({
      next: proyectos => {
        this.proyectos = proyectos;
      },
      error: error => {
        console.error('Error al obtener proyectos:', error);
      }
    });
  }

  obtenerProyectosPorCategoria(categoria: string) {
    this.proyectoService.getByCategory(categoria).subscribe(
      proyectos => {
        this.proyectos = proyectos;
      },
      error => {
        console.error(`Error al obtener proyectos de la categoría ${categoria}`, error);
      }
    );
  }
}