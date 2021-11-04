import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuarios/usuario';
import { CrudService } from 'src/app/services/crud/crud.service';


@Component({
  selector: 'app-departamento1',
  templateUrl: './departamento1.component.html',
  styleUrls: ['./departamento1.component.css']
})

export class Departamento1Component implements OnInit {
  
  
listUsuarios: Usuario[] = []

displayedColumns: string[] = ['responsable',  'marca', 'modelo', 'serie',  'mac_alambrica', 'mac_inalambrica', 'ip_alambrica', 'ip_inalambrica', 'ordinal', 'compra', 'estado', 'observaciones', 'acciones'];
dataSource = new MatTableDataSource(this.listUsuarios);  
  constructor(private crudService:CrudService,private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo()
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
  listarunEquipo()
{
  this.crudService.getunEquipos('0').subscribe(
    res=> {
      
      console.log(res )

      this.listUsuarios=<any>res;
  
    },
    err=> console.log(err)
  );
};





applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
} 
};


