import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuarios/usuario';


@Component({
  selector: 'app-departamento7',
  templateUrl: './departamento7.component.html',
  styleUrls: ['./departamento7.component.css']
})

export class Departamento7Component implements OnInit {

  listUsuarios: Usuario[] = [
    
    
  ];

  displayedColumns: string[] = ['responsable',  'marca', 'modelo', 'serie',  'mac_alambrica', 'mac_inalambrica', 'ip_alambrica', 'ip_inalambrica', 'ordinal', 'compra', 'estado', 'observaciones', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}