import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { Pelicula } from 'src/app/models/pelicula.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  submitted: boolean = false;
  actoresDeLaPeli: Actor[] = [];
  URL_MOVIE_IMG = "https://lh3.googleusercontent.com/proxy/hMAOpDLQDUNHZoX6-BbgeFNGMaTheSFnGfIDOj72CFwXnZo5_reMvLBWW3dS2Bo7N-qDAOXsC6Gt8ZcNaHmXMqgMlIDj48TlEVuA_J1u";

  peliculaForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    tipo: new FormControl(''),
    fecha_estreno: new FormControl(''),
    cantidad_publico: new FormControl('')
  });

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  seleccionar(actor: Actor) {
    const actorYaAgregado = this.actoresDeLaPeli.indexOf(actor);
    if (actorYaAgregado !== -1) {
      return;
    }
    this.actoresDeLaPeli.push(actor);
  }

  onSubmit() {
    this.submitted = true;
    if (this.peliculaForm.invalid || this.actoresDeLaPeli.length === 0) {
      return;
    }
    const values = this.peliculaForm.value;
    const peliNueva = new Pelicula(
      values.id, 
      values.nombre, 
      values.tipo, 
      values.fecha_estreno, 
      values.cantidad_publico, 
      'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Avenger_Endgame_Poster_Oficial.png/revision/latest/top-crop/width/360/height/450?cb=20190326185910&path-prefix=es', 
      this.actoresDeLaPeli
    );
    this.firebaseService.createPelicula(peliNueva)
    .then( re => {
      console.log(re);
      this.peliculaForm.reset();
      this.actoresDeLaPeli = [];
      this.submitted = false;
    })
    .catch( ex => console.log );
  }

}
