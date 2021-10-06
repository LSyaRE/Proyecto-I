import { Component, OnInit } from '@angular/core';
import { EstablesComponent } from '../estables/estables.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  nombre: string = 'nombre'
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){

    this.nombre = 'hola que tal'

  }

}
