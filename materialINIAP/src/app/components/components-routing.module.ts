import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { Departamento1Component } from './departamento1/departamento1.component';
import { Departamento10Component } from './departamento10/departamento10.component';
import { Departamento11Component } from './departamento11/departamento11.component';
import { Departamento2Component } from './departamento2/departamento2.component';
import { Departamento3Component } from './departamento3/departamento3.component';
import { Departamento4Component } from './departamento4/departamento4.component';
import { Departamento5Component } from './departamento5/departamento5.component';
import { Departamento6Component } from './departamento6/departamento6.component';
import { Departamento7Component } from './departamento7/departamento7.component';
import { Departamento8Component } from './departamento8/departamento8.component';
import { Departamento9Component } from './departamento9/departamento9.component';
import { EliminadosComponent } from './eliminados/eliminados.component';
import { EstablesComponent } from './estables/estables.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';




const routes: Routes = [
  {path:'home',component:ComponentsComponent, 
    children:[
      {path:'departamento1',component:Departamento1Component},
      {path:'departamento2',component:Departamento2Component},
      {path:'departamento3',component:Departamento3Component},
      {path:'departamento4',component:Departamento4Component},
      {path:'departamento5',component:Departamento5Component},
      {path:'departamento6',component:Departamento6Component},
      {path:'departamento7',component:Departamento7Component},
      {path:'departamento8',component:Departamento8Component},
      {path:'departamento9',component:Departamento9Component},
      {path:'departamento10',component:Departamento10Component},
      {path:'departamento11',component:Departamento11Component},
      {path:'malos',component:EliminadosComponent},
      {path:'buenos',component:EstablesComponent},
      {path:'regulares',component:MantenimientoComponent},
      {path:'',redirectTo:'/login',pathMatch:'full'},
    ]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
