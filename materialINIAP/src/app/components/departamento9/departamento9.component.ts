import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento9',
  templateUrl: './departamento9.component.html',
  styleUrls: ['./departamento9.component.css']
})
export class Departamento9Component implements OnInit {
 FilterPost ='';
  posts =[
    {
      "id":1,
      "titulo": "Post One",
      "fecha": "02/8/2021"
    },
    {
      "id":1,
      "titulo": "Post One",
      "fecha": "02/8/2021"
    },
    {
      "id":1,
      "titulo": "Post One",
      "fecha": "02/8/2021"
    },
    {
      "id":1,
      "titulo": "Post One",
      "fecha": "02/8/2021"
    }
  ]
  constructor() { }
  
  ngOnInit(): void {
  }
 
}
