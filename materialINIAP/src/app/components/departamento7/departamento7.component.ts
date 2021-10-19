import { Component, OnInit } from '@angular/core';
import { FiltroService } from 'src/app/services/Minventario/filtro/filtro.service';

@Component({
  selector: 'app-departamento7',
  templateUrl: './departamento7.component.html',
  styleUrls: ['./departamento7.component.css']
})
export class Departamento7Component implements OnInit {

  constructor(
    filtro:FiltroService
  ) { }

  ngOnInit(): void {
  }

}
