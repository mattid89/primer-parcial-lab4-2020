import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent implements OnInit {

  @Output() seleccionar = new EventEmitter<Actor>();
  listadoActores: Actor[] = [];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getActores();
  }

  getActores() {
    this.firebaseService.getActores()
    .subscribe((actoresSnapshot) => {
      actoresSnapshot.forEach( doc => this.listadoActores.push(<Actor>doc.data()) );
    });
  }

  seleccionarActor(actor: Actor) {
    this.seleccionar.emit(actor);
  }

}
