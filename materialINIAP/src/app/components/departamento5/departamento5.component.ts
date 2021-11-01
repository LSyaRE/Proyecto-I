import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuarios/usuario';


@Component({
  selector: 'app-departamento5',
  templateUrl: './departamento5.component.html',
  styleUrls: ['./departamento5.component.css']
})

export class Departamento5Component implements OnInit {

  listUsuarios: Usuario[] = [
    {usuario: "jperez", nombre: 'juan', apellido:"Perez", sexo: 'Masculino'},
    {usuario: "gmaria", nombre: 'lola', apellido:"lopez", sexo: 'Femenino'},
    {usuario: "pepito", nombre: 'juanita', apellido:"Peran", sexo: 'Masculino'},
    {usuario: "carlo", nombre: 'rome', apellido:"Parra", sexo: 'Femenino'},
    {usuario: "andrea", nombre: 'ricardo', apellido:"zapata", sexo: 'Masculino'},
    {usuario: "pedro", nombre: 'carlos', apellido:"garcia", sexo: 'Femeninos'},
    
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

