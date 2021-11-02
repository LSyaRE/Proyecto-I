import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuarios/usuario';


@Component({
  selector: 'app-departamento11',
  templateUrl: './departamento11.component.html',
  styleUrls: ['./departamento11.component.css']
})

export class Departamento11Component implements OnInit {

  listUsuarios: Usuario[] = [
    {responsable: "jperez", equipo: 'juan', marca:"Perez", modelo: 'Masculino', serie:'uwu' , mac_alambrica:'54jd', mac_inalambrica:'xc5', ip_alambrica:'1ss2',ip_inalambrica:'45sd', ordinal:'5424', compra:'dsd',estado:'dsdfsdf',observaciones:'hola'},
    {responsable: "gmaria", equipo: 'lola', marca:"lopez", modelo: 'Femenino' ,serie:'uwu' , mac_alambrica:'54jd', mac_inalambrica:'xc5', ip_alambrica:'1ss2',ip_inalambrica:'45sd', ordinal:'5424', compra:'dsd',estado:'dnjbbn',observaciones:'hola'},
    {responsable: "pepito", equipo: 'juanita', marca:"Peran", modelo: 'Masculino', serie:'uwu', mac_alambrica:'54jd', mac_inalambrica:'xc5',ip_alambrica:'1ss2', ip_inalambrica:'45sd', ordinal:'5424',compra:'dsd',estado:'dsdfdf',observaciones:'hola' }
    
    
  ];

  displayedColumns: string[] = ['responsable', 'equipo', 'marca', 'modelo', 'serie', 'mac_alambrica', 'mac_inalambrica', 'ip_alambrica', 'ip_inalambrica', 'ordinal', 'compra','estado', 'observaciones', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}