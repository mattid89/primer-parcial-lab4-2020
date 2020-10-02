import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';


const routes: Routes = [
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent },
  { path: '',   redirectTo: '/busqueda', pathMatch: 'full' },
  { path: '**', component: BusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
