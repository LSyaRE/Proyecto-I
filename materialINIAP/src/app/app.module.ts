import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { Departamento11Component } from '../app/components/departamento11/departamento11.component';
import { Departamento10Component } from '../app/components/departamento10/departamento10.component';
import { Departamento2Component } from '../app/components/departamento2/departamento2.component';
import { Departamento3Component } from '../app/components/departamento3/departamento3.component';
import { Departamento4Component } from '../app/components/departamento4/departamento4.component';
import { Departamento5Component } from '../app/components/departamento5/departamento5.component';
import { Departamento6Component } from '../app/components/departamento6/departamento6.component';
import { Departamento7Component } from '../app/components/departamento7/departamento7.component';
import { Departamento8Component } from '../app/components/departamento8/departamento8.component';
import { Departamento9Component } from '../app/components/departamento9/departamento9.component';
import { InventarioComponent } from '../app/components/inventario/inventario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EliminadosComponent } from '../app/components/eliminados/eliminados.component';
import { MantenimientoComponent } from '../app/components/mantenimiento/mantenimiento.component';
import { EstablesComponent } from '../app/components/estables/estables.component';



@NgModule({
  declarations: [
    AppComponent,
    Departamento2Component,
    Departamento3Component,
    Departamento4Component,
    Departamento5Component,
    Departamento6Component,
    Departamento7Component,
    Departamento8Component,
    Departamento9Component,
    Departamento10Component,
    Departamento11Component,
    InventarioComponent,
    EliminadosComponent,
    MantenimientoComponent,
    EstablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
