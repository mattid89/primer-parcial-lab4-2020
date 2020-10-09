import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  actorSeleccionado: Actor;
  constructor() { }

  ngOnInit() {
  }

  mostrarActor(actor: Actor) {
    console.log(actor);
    this.actorSeleccionado = actor;
  }

  seBorro(sino: boolean) {
    this.actorSeleccionado = undefined;
  }

}
