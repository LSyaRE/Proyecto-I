import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Usuario} from './../interfaces/usuarios/usuario'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url= 'http://localhost:3000/api/inicio';
  constructor(
                private http: HttpClient,
                
              ) { }


//get usuarios
getUsuarios()
{
  return this.http.get(this.url);
}; 


//get un usuario
getUnUsuarios(id:string)
{
  return this.http.get(this.url+'/'+id);
};

//Agregar usuario
addUsuario(usuario:Usuario){
  
  return this.http.post(this.url,usuario);

};

//Eliminar usuario
deleteUsuario(id:'string'){
  return this.http.delete(this.url+'/'+id);
}


//Modificar usuario
modifyUsuario(id:string, usuario:Usuario){
  return this.http.put(this.url+'/'+id,usuario);
}


};

