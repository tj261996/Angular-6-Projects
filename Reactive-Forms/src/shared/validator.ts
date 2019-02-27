import { Component, AfterViewInit, Injectable } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class validator{

  

ageRangeValidator(min:number,max:number):ValidatorFn{
    return(AbstractControl:AbstractControl): {[key: string]:any}| null=>{
      if(AbstractControl.value!=="" && (isNaN(AbstractControl.value) || AbstractControl.value < min ||  AbstractControl.value> max))
      {
        return {'ageRange': {value:AbstractControl.value}};
      }
     return null;
      
    }
  }
 
   pattern(reg: RegExp) : ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        var value = <string>control.value;
        return value.match(reg) ? null : { 'pattern': { value } };
    }
  }
  forbiddenNameValidator(forbiddenName:RegExp): ValidatorFn {
    return (control:AbstractControl): {[key: string]: any}|null=>{  
           const forbidden=  forbiddenName.test(control.value);
      return forbidden ?{'forbiddenName':{value:control.value}}:null;
   }
  }  
  
}