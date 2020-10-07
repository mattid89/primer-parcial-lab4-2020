import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss']
})
export class TablaPeliculasComponent implements OnInit {

  @Output() mostrar = new EventEmitter<Pelicula>();
  listadoPeliculas: Pelicula[] = [];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas() {
    this.firebaseService.getPeliculas()
    .subscribe((peliculasSnapshot) => {
      const listaNueva: Pelicula[] = [];
      console.log('snapshot');
      peliculasSnapshot.forEach( doc => listaNueva.push(<Pelicula>doc.payload.doc.data()) );
      this.listadoPeliculas = listaNueva;
    });
  }

  mostrarDetalle(pelicula: Pelicula) {
    this.mostrar.emit(pelicula);
  }

}
