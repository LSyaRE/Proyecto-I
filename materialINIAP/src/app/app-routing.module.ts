import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Departamento1Component } from './components/departamento1/departamento1.component';
import { Departamento2Component } from './components/departamento2/departamento2.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'home',
children:[
  {path:'departamento1',component:Departamento1Component},
  {path:'departamento2',component:Departamento2Component}
]
,component:NavegacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
