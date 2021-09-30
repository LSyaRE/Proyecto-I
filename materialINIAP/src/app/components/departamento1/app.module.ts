import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { Departamento10Component } from '../departamento10/departamento10.component';
import { Departamento11Component } from '../departamento11/departamento11.component';
import { Departamento12Component } from '../departamento12/departamento12.component';
import { Departamento13Component } from '../departamento13/departamento13.component';
import { Departamento2Component } from '../departamento2/departamento2.component';
import { Departamento3Component } from '../departamento3/departamento3.component';
import { Departamento4Component } from '../departamento4/departamento4.component';
import { Departamento5Component } from '../departamento5/departamento5.component';
import { Departamento6Component } from '../departamento6/departamento6.component';
import { Departamento7Component } from '../departamento7/departamento7.component';
import { Departamento8Component } from '../departamento8/departamento8.component';
import { Departamento9Component } from '../departamento9/departamento9.component';
import { InventarioComponent } from '../inventario/inventario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
    Departamento12Component,
    Departamento13Component,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
