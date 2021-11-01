import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import {FormsModule, ReactiveFormsModule }from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Angular material*/
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// import { PasswordDirective } from './validations/password.directive';
// import { PasswordValidationDirective } from './validations/password-validation.directive';


@NgModule({
  declarations: [
    AppComponent,
    
    //  PasswordDirective,
    // PasswordValidationDirective,
  ],
  imports: [
    BrowserModule,
    ComponentsRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PagesModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
 
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


