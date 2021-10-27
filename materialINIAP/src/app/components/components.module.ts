import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { Departamento1Component } from './departamento1/departamento1.component';
import { Departamento2Component } from './departamento2/departamento2.component';
import { Departamento3Component } from './departamento3/departamento3.component';
import { Departamento4Component } from './departamento4/departamento4.component';
import { Departamento5Component } from './departamento5/departamento5.component';
import { Departamento6Component } from './departamento6/departamento6.component';
import { Departamento7Component } from './departamento7/departamento7.component';
import { Departamento8Component } from './departamento8/departamento8.component';
import { Departamento9Component } from './departamento9/departamento9.component';
import { Departamento10Component } from './departamento10/departamento10.component';
import { Departamento11Component } from './departamento11/departamento11.component';
import { EliminadosComponent } from './eliminados/eliminados.component';
import { EstablesComponent } from './estables/estables.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ComponentsComponent } from './components.component';
import {HttpClientModule }from '@angular/common/http';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FiltroService } from '../services/Minventario/filtro/filtro.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { BrowserModule } from '@angular/platform-browser';
/*Angular material*/
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    
    Departamento1Component,
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
    EliminadosComponent,
    EstablesComponent,
    MantenimientoComponent,
    NavegacionComponent,
    ComponentsComponent,
    BienvenidaComponent,
    PostsComponent

    
  ],  
  providers: [FiltroService],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule
    
    
    
  ],
  exports:[
    
    Departamento1Component,
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
    EliminadosComponent,
    EstablesComponent,
    MantenimientoComponent,
    NavegacionComponent,
    ComponentsComponent,
    MatTableModule,
    MatTooltipModule
    

  ]
})
export class ComponentsModule {

 }
