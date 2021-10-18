import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnbdService } from 'src/app/services/connbd.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  nombre: string = 'Direccion General'
  opcion: string = '';

  constructor(private connbdService: ConnbdService) { }

  ngOnInit(): void {
  }

  listarUser() {
    this.connbdService.getUsers().subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
  }


}
