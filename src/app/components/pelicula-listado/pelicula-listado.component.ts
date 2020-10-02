import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }


  createPelicula(pelicula: Pelicula) {
    console.log('estoy creando una peli...');
    //const unaPelicula = new Pelicula('2','titanic', 'romance', '2020-01-02', 6000, '')
    this.firebaseService.createPelicula(pelicula)
    .then( res => console.log )
    .catch( err => console.log )
  }

}
