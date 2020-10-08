import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { Pais } from 'src/app/models/pais.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  submitted: boolean = false;
  nacionalidad: string;
  URL_MOVIE_IMG = "https://lh3.googleusercontent.com/proxy/hMAOpDLQDUNHZoX6-BbgeFNGMaTheSFnGfIDOj72CFwXnZo5_reMvLBWW3dS2Bo7N-qDAOXsC6Gt8ZcNaHmXMqgMlIDj48TlEVuA_J1u";

  actorForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    sexo: new FormControl(''),
    fecha_nac: new FormControl(''),
    foto: new FormControl('')
  });

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  seleccionarPais(pais: Pais) {
    this.nacionalidad = pais.name;
  }

  onSubmit() {
    this.submitted = true;
    if (this.actorForm.invalid || !this.nacionalidad) {
      return;
    }
    const values = this.actorForm.value;
    const actorNuevo = new Actor(
      values.id, 
      values.nombre, 
      values.apellido, 
      values.sexo, 
      values.fecha_nac, 
      'https://us.as.com/us/imagenes/2020/03/11/tikitakas/1583958488_715607_1583958772_noticia_normal.jpg', 
      this.nacionalidad
    );
    console.log('actor', actorNuevo);
    this.firebaseService.createActor(actorNuevo)
    .then( re => {
      console.log(re);
      this.actorForm.reset();
      this.nacionalidad = undefined;
      this.submitted = false;
    })
    .catch( ex => console.log );
  }

}
