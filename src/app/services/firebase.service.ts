import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pelicula } from '../models/pelicula.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {
    const peliculas = db.collection('peliculas').valueChanges();
    peliculas.subscribe(
      (res) => console.log,
      (err) => console.error
    );
  }


    public createPelicula(pelicula: Pelicula) {
      return this.db.collection('peliculas').doc(pelicula.id).set({...pelicula});
    }

    public getPelicula(documentId: string) {
      return this.db.collection('peliculas').doc(documentId).get();
    }

    public getPeliculas() {
      return this.db.collection('peliculas').get();
    }

    public updatePelicula(documentId: string, pelicula: Pelicula) {
      return this.db.collection('peliculas').doc(documentId).set(pelicula);
    }
}
