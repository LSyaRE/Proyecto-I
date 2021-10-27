import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuarios/usuario';


@Component({
  selector: 'app-departamento3',
  templateUrl: './departamento3.component.html',
  styleUrls: ['./departamento3.component.css']
})

export class Departamento3Component implements OnInit {

  listUsuarios: Usuario[] = [
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" },
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" },  
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" },  
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Año:"sdfsd", Estado:"ndfsdnf" }, 

    
  ];

  displayedColumns: string[] = ['Responsable', 'Equipo', 'Marca', 'Modelo', 'Serie', 'Mac_Address_Alambrica','Mac_Inalambrica_Alambrica','Ip_Alambrica','Ip_Inalambrica','Ordinal','Año','Estado','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}