import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  unaPelicula: Pelicula;
  constructor() { }

  ngOnInit() {
  }

  mostrarDetalle(pelicula: Pelicula) {
    this.unaPelicula = pelicula;
  }

}
