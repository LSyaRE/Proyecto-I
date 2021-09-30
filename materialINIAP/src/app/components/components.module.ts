import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario/inventario.component';
import { Departamento11Component } from './departamento11/departamento11.component';
import { Departamento10Component } from './departamento10/departamento10.component';
import { Departamento9Component } from './departamento9/departamento9.component';
import { Departamento8Component } from './departamento8/departamento8.component';
import { Departamento7Component } from './departamento7/departamento7.component';
import { Departamento6Component } from './departamento6/departamento6.component';
import { Departamento5Component } from './departamento5/departamento5.component';
import { Departamento4Component } from './departamento4/departamento4.component';
import { Departamento3Component } from './departamento3/departamento3.component';
import { Departamento2Component } from './departamento2/departamento2.component';
import { Departamento1Component } from './departamento1/departamento1.component';
import { EliminadosComponent } from './eliminados/eliminados.component';
import { EstablesComponent } from './estables/estables.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   InventarioComponent,
   Departamento11Component,
   Departamento10Component,
   Departamento9Component,
   Departamento8Component,
   Departamento7Component,
   Departamento6Component,
   Departamento5Component,
   Departamento4Component,
   Departamento3Component,
   Departamento2Component,
   Departamento1Component,
   EliminadosComponent,
   EstablesComponent,
   MantenimientoComponent

  ]
})
export class ComponentsModule { }
