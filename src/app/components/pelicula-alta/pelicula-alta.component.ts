import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  seleccionar(actor: Actor) {
    console.log(actor);
  }

}
