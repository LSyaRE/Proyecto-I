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

  listUsuarios: Usuario[] = [
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" },
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" },  
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" },  
    {Responsable: "jperez", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" }, 
    {Responsable: "carla", Equipo: 'juan', Marca :"Perez", Modelo: 'Masculino', Serie:"hbhbn", Mac_Address_Alambrica:"vd", Mac_Inalambrica_Alambrica:"sdvsd",Ip_Alambrica:"dsad", Ip_Inalambrica:"svsd",  Ordinal:"vsdv", Instalacion:"sdfsd", Estado:"ndfsdnf" }, 

    
  ];

  displayedColumns: string[] = ['Responsable', 'Equipo', 'Marca', 'Modelo', 'Serie', 'Mac_Address_Alambrica','Mac_Inalambrica_Alambrica','Ip_Alambrica','Ip_Inalambrica','Ordinal','Instalacion','Estado','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  //Dentro del constructor llama al servicio del crud
  constructor(private crudService:CrudService,private router:Router) { }

  //esta funcion hace que empiece a ejecutar  la funcion de listar Equipo
  ngOnInit(): void {
    this.listarEquipo();}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
      this.listUsuarios=<any>res; 
      
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




