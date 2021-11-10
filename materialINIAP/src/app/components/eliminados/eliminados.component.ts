import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuarios/usuario';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-eliminados',
  templateUrl: './eliminados.component.html',
  styleUrls: ['./eliminados.component.css']
})
export class EliminadosComponent implements OnInit {

  
  listUsuarios: Usuario[] = [
    
    
    
  ];

  displayedColumns: string[] =  ['nombres_personas', 'tipo','marca_equipos', 'modelo_equipos', 'num_serie_equipos', 'lan_mac', 'wifi_mac', 'lan_ip', 'wifi_ip', 'ordinal_equipos', 'buy_age_equipos','nom_estado', 'observacion_equipos', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor(private crudService:CrudService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  listarEquipo(){

    this.crudService.getEquipos().subscribe(
      res=> {
        
        
        this.listUsuarios=<any>res; 
        console.log(this.listUsuarios)
      },
      err=> console.log(err)
    );
  
  }

}
