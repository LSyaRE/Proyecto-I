import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import {FormsModule }from '@angular/forms';
import { MostrarfiltroPipe } from './mostrarfiltro.pipe';
import { FilterPipe } from './filter.pipe';


// import { PasswordDirective } from './validations/password.directive';
// import { PasswordValidationDirective } from './validations/password-validation.directive';


@NgModule({
  declarations: [
    AppComponent,
    MostrarfiltroPipe,
    FilterPipe,
    
    //  PasswordDirective,
    // PasswordValidationDirective,
  ],
  imports: [
    BrowserModule,
    ComponentsRoutingModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
