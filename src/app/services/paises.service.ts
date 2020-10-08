import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private URL_PAISES = 'https://restcountries.eu/rest/v2/all';

  constructor(private httpClient: HttpClient) { }

  getPaises(): Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(this.URL_PAISES);
  }

}
