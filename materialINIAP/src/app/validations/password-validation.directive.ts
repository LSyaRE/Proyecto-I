import { Directive } from '@angular/core';
import {  NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[passwordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi:true}]

})
export class PasswordValidationDirective  implements Validator{
  passwordsProhibidos = ['123456', 'querty','123456789'];

  validate(control:import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const password= <string>control.value;

    if (!password) {return;}
    if (password.length < 4) {return;}

    if (this.passwordsProhibidos.indexOf(password) !== -1){
      return {'passwordValidation':{'message':'Escoge un mejos password'}}
    }


  }
    
  constructor() { }

}
