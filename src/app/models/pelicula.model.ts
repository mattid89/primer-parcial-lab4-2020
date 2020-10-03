import { Actor } from './actor.model';

export class Pelicula {

    constructor(
        public id: string,
        public nombre: string,
        public tipo: string,
        public fecha_estreno: string,
        public cantidad_publico: number,
        public foto: string,
        public actores: Actor[]
    ){}
}