import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.scss']
})
export class BotonBorrarComponent implements OnInit {

  @Input() actor: Actor;
  @Output() seBorro = new EventEmitter<boolean>();

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  borrar() {
    this.firebaseService.deleteActor(this.actor.id)
    .then( re => {
      console.log(re);
      this.seBorro.emit(true);
    })
    .catch( ex => console.log );
  }

}
