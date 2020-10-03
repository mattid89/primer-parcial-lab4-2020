import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  cant_actores: number = 0;
  URL_MOVIE_IMG = "https://lh3.googleusercontent.com/proxy/hMAOpDLQDUNHZoX6-BbgeFNGMaTheSFnGfIDOj72CFwXnZo5_reMvLBWW3dS2Bo7N-qDAOXsC6Gt8ZcNaHmXMqgMlIDj48TlEVuA_J1u";

  peliculaForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    tipo: new FormControl(''),
    fecha_estreno: new FormControl(''),
    cantidad_publico: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  seleccionar(actor: Actor) {
    console.log(actor);
  }

  onSubmit() {
    //$('.alert').alert()
    console.log(this.peliculaForm)
  }

}
