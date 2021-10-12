import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { Departamento1Component } from './departamento1/departamento1.component';




const routes: Routes = [
  {path:'home',component:ComponentsComponent, 
    children:[
      {path:'departamento1',component:Departamento1Component
    }
    ]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
