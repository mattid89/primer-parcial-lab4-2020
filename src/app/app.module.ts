import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { TablaPeliculasComponent } from './components/tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { TablaActoresComponent } from './components/tabla-actores/tabla-actores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonBorrarComponent } from './components/actor-listado/boton-borrar/boton-borrar.component';
import { DetalleActorComponent } from './components/actor-listado/detalle-actor/detalle-actor.component';
import { ModificarActorComponent } from './components/actor-listado/modificar-actor/modificar-actor.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    PeliculaListadoComponent,
    ActorListadoComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent,
    TablaActoresComponent,
    NavbarComponent,
    TablaPaisesComponent,
    BotonBorrarComponent,
    DetalleActorComponent,
    ModificarActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatCardModule,
    MatListModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
