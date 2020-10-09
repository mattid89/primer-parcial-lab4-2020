import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  @Input() actor: Actor;
  constructor() { }

  ngOnInit() {
  }

}
