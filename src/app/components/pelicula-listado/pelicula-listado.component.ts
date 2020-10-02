import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Pelicula } from 'src/app/models/pelicula.model';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    //this.createPelicula();
  }


  createPelicula() {
    console.log('estoy creando una peli...');
    //const unaPelicula = new Pelicula('2','titanic', 'romance', '2020-01-02', 6000, '')
    const actor = new Actor('3', 'soledad', 'silveira', 'femenino', '1965-12-23', '');
    this.firebaseService.createActor(actor)
    .then( res => console.log )
    .catch( err => console.log )
  }

}
