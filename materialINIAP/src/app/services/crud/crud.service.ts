import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'src/app/interface/personas/persona';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //En la url se coloca donde esta ubicado el REST API
  url= 'http://localhost:3000/api/inicio';
  
  //Dentro del constructor se instancio el servicio de http
  constructor(
                private http: HttpClient,
                
              ) { }


//get usuarios:obtiene todos los usuarios
getUsuarios()
{
  return this.http.get(this.url);
}; 


//get un usuario: obtiene solo un usuario
getUnUsuarios(id:string)
{
  return this.http.get(this.url+'/'+id);
};

//Agregar usuario
addUsuario(usuario:Persona){
  
  return this.http.post(this.url,usuario);

};

//Eliminar usuario
deleteUsuario(id:'string'){
  return this.http.delete(this.url+'/'+id);
}


//Modificar usuario
modifyUsuario(id:string, usuario:Persona){
  return this.http.put(this.url+'/'+id,usuario);
}
}
