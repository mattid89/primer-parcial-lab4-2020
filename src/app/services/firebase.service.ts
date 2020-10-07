import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../models/actor.model';
import { Pelicula } from '../models/pelicula.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

    // PELICULAS

    public createPelicula(pelicula: Pelicula) {
      return this.db.collection('peliculas').doc(pelicula.id).set({...pelicula});
    }

    public getPelicula(documentId: string) {
      return this.db.collection('peliculas').doc(documentId).get();
    }

    public getPeliculas() {
      // return this.db.collection('peliculas').get();
      return this.db.collection('peliculas').snapshotChanges();
    }

    public updatePelicula(documentId: string, pelicula: Pelicula) {
      return this.db.collection('peliculas').doc(documentId).set(pelicula);
    }

    public deletePelicula(documentId: string) {
      return this.db.collection('peliculas').doc(documentId).delete();
    }

    // ACTORES

    public createActor(actor: Actor) {
      return this.db.collection('actores').doc(actor.id).set({...actor});
    }

    public getActor(documentId: string) {
      return this.db.collection('actores').doc(documentId).get();
    }

    public getActores() {
      return this.db.collection('actores').get();
    }

    public updateActor(documentId: string, actor: Actor) {
      return this.db.collection('actores').doc(documentId).set({...actor});
    }
}
