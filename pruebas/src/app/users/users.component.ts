import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuarios/usuario';
import {CrudService} from '../services/crud.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  listadoUsuario:Usuario[] = [];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.listarEquipo();
  }
listarEquipo()
{
  this.crudService.getUsuarios().subscribe(
    res=> {
      console.log(res)
      this.listadoUsuario=<any>res; 
      
    },
    err=> console.log(err)
  );
}

}
