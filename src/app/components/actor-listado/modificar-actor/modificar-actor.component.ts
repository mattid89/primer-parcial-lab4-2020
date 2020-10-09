import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.scss']
})
export class ModificarActorComponent implements OnInit {

  submitted: boolean = false;

  actorForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    sexo: new FormControl(''),
    fecha_nac: new FormControl(''),
    nac: new FormControl('')
  });
  @Input() actor: Actor;
  @Output() seBorro = new EventEmitter<boolean>();
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // this.actorForm.patchValue({
    //   id: this.actor.id,
    //   nombre: this.actor.nombre,
    //   apellido: this.actor.apellido,
    //   sexo: this.actor.sexo,
    //   fecha_nac: this.actor.fecha_nac,
    //   nac: this.actor.nac
    // });
  }

  onSubmit() {
    this.submitted = true;
    if (this.actorForm.invalid) {
      return;
    }
    const values = this.actorForm.value;
    console.log(values);
    const actorAModificar = new Actor(
      values.id, 
      values.nombre, 
      values.apellido, 
      values.sexo, 
      values.fecha_nac, 
      'https://us.as.com/us/imagenes/2020/03/11/tikitakas/1583958488_715607_1583958772_noticia_normal.jpg',
      values.nac
    );
    console.log('actor', actorAModificar);
    this.firebaseService.updateActor(actorAModificar.id, actorAModificar)
    .then( re => {
      console.log(re);
      this.actorForm.reset();
      this.submitted = false;
      this.seBorro.emit(true);
    })
    .catch( ex => console.log );
  }

}
