import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  nombre: string = 'Direccion General'
  opcion: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  }



