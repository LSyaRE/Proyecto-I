import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento9',
  templateUrl: './departamento9.component.html',
  styleUrls: ['./departamento9.component.css']
})
export class Departamento9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterPost='';
  posts =[
    {
      "id":1,
      "title":"post one",
      "date":"02/04/2019"
    },
    {
      "id":2,
      "title":"post two",
      "date":"02/04/2019"
    },
    {
      "id":3,
      "title":"post  tree",
      "date":"02/04/2019"
    },
    {
      "id":4,
      "title":"post  four",
      "date":"02/04/2019"
    },
    {
      "id":5,
      "title":"post five",
      "date":"02/04/2019"
    }

  ];
  
};
