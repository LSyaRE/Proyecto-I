import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
{path:'home',component:NavegacionComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',redirectTo:'/home',pathMatch:'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
