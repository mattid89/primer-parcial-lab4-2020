import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Input() borrado: boolean;
  @Output() borrarPelicula = new EventEmitter<Pelicula>();
  constructor() { }

  ngOnInit() {
  }

  borrar() {
    this.borrarPelicula.emit(this.pelicula);
  }
  


}
