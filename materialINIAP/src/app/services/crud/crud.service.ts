import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'src/app/interface/personas/persona';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //En la url se coloca donde esta ubicado el REST API
  url= 'http://localhost:3000/api';
  
  //Dentro del constructor se instancio el servicio de http
  constructor(
                private http: HttpClient,
                
              ) { }


//get Equipos:obtiene todos Equipos
getEquipos()
{
  return this.http.get(this.url+'/inicio');
}; 





//get un Equipo: obtiene solo Equipo
getunEquipos(id:string)
{
  return this.http.get(this.url+'/inicio'+'/'+id);
};

//obtiene todas las personas
getPersonas()
{
  return this.http.get(this.url+'/personas');
}; 


//Agregar al Equipo
addEquipo(usuario:Persona){
  
  return this.http.post(this.url +'/inicio',usuario);

};

//Agregar a la persona
addPersona(usuario:Persona){
  
  return this.http.post(this.url +'/personas',usuario);

};

//Eliminar Equipo
deleteUsuario(id:'string'){
  return this.http.delete(this.url+'/'+id);
}


//Modificar equipo
modifyUsuario(id:string, usuario:Persona){
  return this.http.put(this.url+'/'+id,usuario);
}
}
