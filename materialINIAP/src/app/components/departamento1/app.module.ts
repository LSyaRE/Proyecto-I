import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Departamento2Component } from './departamento2/departamento2.component';
import { Departamento3Component } from './app/departamento3/departamento3.component';
import { Departamento4Component } from './app/departamento4/departamento4.component';
import { Departamento5Component } from './app/departamento5/departamento5.component';
import { Departamento6Component } from './app/departamento6/departamento6.component';
import { Departamento7Component } from './app/departamento7/departamento7.component';
import { Departamento8Component } from './app/departamento8/departamento8.component';
import { Departamento9Component } from './app/departamento9/departamento9.component';
import { Departamento10Component } from './app/departamento10/departamento10.component';
import { Departamento11Component } from './app/departamento11/departamento11.component';
import { Departamento12Component } from './app/departamento12/departamento12.component';
import { Departamento13Component } from './app/departamento13/departamento13.component';

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
    Departamento13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
