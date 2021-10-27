import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interface/personas/persona';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-departamento1',
  templateUrl: './departamento1.component.html',
  styleUrls: ['./departamento1.component.css']
})
export class Departamento1Component implements OnInit {

  //Llama al modulo de interfaz de usuario y lo almacena
  listado:Persona[] = [];

  //Dentro del constructor llama al servicio del crud
  constructor(private crudService:CrudService,private router:Router) { }

  //esta funcion hace que empiece a ejecutar  la funcion de listar Equipo
  ngOnInit(): void {
    this.listarEquipo();
  }

  //Delay para que se autorecarguen las tablas
  delay(n:any){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

  
  //Esta funcion nos permite usar la funcion dentro de CrudService y inicio la funcion de GetUsuarios ademas 
  //entrega la respuesta y la almacena en listadoUsuario
listarEquipo()
{
  this.crudService.getUsuarios().subscribe(
    res=> {
      
      console.log(res)
      this.listado=<any>res; 
      
    },
    err=> console.log(err)
  );
};

async eliminarUsuario(id_delete:any){
  this.crudService.deleteUsuario(id_delete).subscribe(
    res=>{
      
      console.log('Equipo eliminado')
      
    },
    err=> console.log(err)
  );
  await this.delay(0.5)
  this.listarEquipo();
};


editarUsuario(id_edit:any){
  this.router.navigate(['/editar/'+id_edit])
}

}
