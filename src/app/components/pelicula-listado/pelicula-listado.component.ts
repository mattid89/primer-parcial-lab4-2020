import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  unaPelicula: Pelicula;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    //this.createPelicula();
  }

  mostrarDetalle(pelicula: Pelicula) {
    this.unaPelicula = pelicula;
  }

  borrarPeli(pelicula: Pelicula) {
    this.firebaseService.deletePelicula(pelicula.id)
    .then( res => {
      this.unaPelicula = undefined;
      console.log('Borrado Ok');
    })
    .catch( ex => console.log )
  }


}
