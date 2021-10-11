import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from './registro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              './login2.component.css']
})
export class LoginComponent implements OnInit {
  model: Registro = {username:'', pasword:'',};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navHome(){

    this.router.navigate(['/home'])
  }
  submit(){
    console.log(this.model)}
}