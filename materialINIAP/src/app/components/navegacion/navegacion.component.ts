import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  nombre: string = 'Nombre Usuario'
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    
    this.nombre= 'Jonas'
    
  }
}
