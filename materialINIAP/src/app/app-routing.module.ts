import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'home',component:NavegacionComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
