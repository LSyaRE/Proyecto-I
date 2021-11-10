import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from './registro';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Usuario } from 'src/app/interface/usuarios/usuario';
import { Login } from 'src/app/interface/login/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css',
              './login2.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup(
    {
      nombre:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  )

  model: Registro = {username:'', password:'',};


  constructor(private router:Router, private crudService:CrudService) { }

  ngOnInit(): void {
  }

  delay(n:any){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  
  
    }
    submit(form:Login){
      console.log(form)
      if (form.nombre=='admin@iniap.gob.ec' && form.password=='12345' ){
        this.router.navigate(['/home'])

      }
      else{
        console.log('no se ha podido ingresar a la base de inventario')
      }
      
    }

 

  Enviar(){
  this.model= {username:'', password:'',};
}
}
