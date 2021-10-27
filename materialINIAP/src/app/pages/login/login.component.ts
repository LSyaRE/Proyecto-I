import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from './registro';
import{FormGroup,FormControl,Validators} from '@angular/forms';


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


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  delay(n:any){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  
  
    }
    submit(form:any){
      console.log(this.model)
      console.log(form)
      this.router.navigate(['/home'])
    }

 

  Enviar(){
  this.model= {username:'', password:'',};
}
}
