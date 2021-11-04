import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuarios/usuario';


@Component({
  selector: 'app-departamento2',
  templateUrl: './departamento2.component.html',
  styleUrls: ['./departamento2.component.css']
})

export class Departamento2Component implements OnInit {

  listUsuarios: Usuario[] = [
   
    
  ];

  displayedColumns: string[] = ['nombres_personas', 'marca_equipos', 'modelo_equipos', 'num_serie_equipos', 'lan_mac', 'wifi_mac', 'lan_ip', 'wifi_ip', 'ordinal_equipos', 'buy_age_equipos','nom_estado', 'observacion_equipos', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}