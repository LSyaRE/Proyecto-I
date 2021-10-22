import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuarios/usuario';
import {CrudService} from '../services/crud.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  //Llama al modulo de interfaz de usuario y lo almacena
  listadoUsuario:Usuario[] = [];

  //Dentro del constructor llama al servicio del crud
  constructor(private crudService:CrudService) { }

  //esta funcion hace que empiece a ejecutar  la funcion de listar Equipo
  ngOnInit(): void {
    this.listarEquipo();
  }
  //Esta funcion nos permite usar la funcion dentro de CrudService y inicio la funcion de GetUsuarios ademas 
  //entrega la respuesta y la almacena en listadoUsuario
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
