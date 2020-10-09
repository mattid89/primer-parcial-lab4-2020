import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';

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
  constructor() { }

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
    // const actorNuevo = new Actor(
    //   values.id, 
    //   values.nombre, 
    //   values.apellido, 
    //   values.sexo, 
    //   values.fecha_nac, 
    //   values.nac
    // );
    // console.log('actor', actorNuevo);
    // this.firebaseService.createActor(actorNuevo)
    // .then( re => {
    //   console.log(re);
    //   this.actorForm.reset();
    //   this.nacionalidad = undefined;
    //   this.submitted = false;
    // })
    // .catch( ex => console.log );
  }

}
