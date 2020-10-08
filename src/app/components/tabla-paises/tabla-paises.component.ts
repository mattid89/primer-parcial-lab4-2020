import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  //@Input() paises: Pais[];
  @Input() titulo: String;
  @Input() siNoBorra: boolean;
  @Output() seleccion = new EventEmitter<Pais>();
  @Output() eliminacion = new EventEmitter<Pais>();
  paises: Pais[] = [];
  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.paisesService.getPaises()
    .subscribe(
      paises => {
        this.paises = paises;
      },
      error => {
        console.log(error)
      }
    );
  }

  seleccionar(pais: Pais) {
    this.seleccion.emit(pais);
  }

  eliminar(pais: Pais) {
    this.eliminacion.emit(pais);
  }

}
