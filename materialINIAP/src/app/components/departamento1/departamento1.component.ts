import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuarios/usuario';


@Component({
  selector: 'app-departamento1',
  templateUrl: './departamento1.component.html',
  styleUrls: ['./departamento1.component.css']
})

export class Departamento1Component implements OnInit {

  listUsuarios: Usuario[] = [
    {responsable: "jperez", equipo: 'juan', marca:"Perez", modelo: 'Masculino', serie:'uwu' , mac_alambrica:'54jd', mac_inalambrica:'xc5', ip_alambrica:'1ss2',},
    {responsable: "gmaria", equipo: 'lola', marca:"lopez", modelo: 'Femenino' ,serie:'uwu' , mac_alambrica:'54jd', mac_inalambrica:'xc5', ip_alambrica:'1ss2',},
    {responsable: "pepito", equipo: 'juanita', marca:"Peran", modelo: 'Masculino', serie:'uwu', mac_alambrica:'64jd', mac_inalambrica:'xc5',ip_alambrica:'1ss2', }
    
    
  ];

  displayedColumns: string[] = ['responsable', 'equipo', 'marca', 'modelo', 'serie',  'mac_alambrica', 'mac_inalambrica', 'ip_alambrica', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios); 
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


