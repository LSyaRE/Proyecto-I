import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Envio } from 'src/app/interface/bdObtencion/envio';
import { Newid } from 'src/app/interface/bdObtencion/newid';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  id:Newid [] = [];
  
  usuario:Envio={
    id_all:'',
    numSerie:'',
    marca:'',
    modelo:'',
    ordinal:'',
    buyAge:'',
    observacion:'',
    ip_wifi:'',
    ip_lan:'',
    mac_wifi:'',
    mac_lan:'',
    depart:''
  
  };

  constructor(private crudService:CrudService, private router:Router) { }

  ngOnInit(): void {
    this.listarNewId()
    console.log(this.id);
  }

  listarNewId(){

    this.crudService.getNewId().subscribe(
      res=> {
        
        
        this.id=<any>res; 
        console.log(this.id)
      },
      err=> console.log(err)
    );
  
  }
  delay(n: any) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  async agregarEquipo() {

    console.log(this.usuario)
    //  const add = this.crudService.addEquipo(this.usuario).subscribe(
    //    res => {
    //      console.log(res)

    //    },
    //    err => console.log(err)
    //  );
    //  console.log(add)
    await this.delay(0.5)
    this.router.navigate(['/home/inicio'])
     

   }
}
  

  


