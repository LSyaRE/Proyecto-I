import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

 handleSeacrch(Value:string){
   console.log(Value)
 }






  constructor() { }

  ngOnInit(): void {
  }

}
