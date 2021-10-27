import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from './registro';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Usuario } from 'src/app/interface/usuarios/usuario';


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
    submit(form:Usuario){
      this.crudService.getUsuarios().subscribe(data => {
        console.log(data);
      });
    }

 

  Enviar(){
  this.model= {username:'', password:'',};
}
}
