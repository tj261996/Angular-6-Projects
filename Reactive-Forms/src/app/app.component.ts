import { Component, AfterViewInit, Injectable } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import{validator} from 'src/shared/validator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  min=10;
  max=20;
  registrationForm: FormGroup;
  public constructor (validator:validator,fb:FormBuilder){
   this.registrationForm = fb.group({

          userName:  ['',
          [Validators.required,
          Validators.minLength(4),
          validator.forbiddenNameValidator(/admin/)
          ]
        ],
        age: ['',[Validators.required,
        validator.ageRangeValidator(this.min,this.max)]
        ]
      });
    
  }
//   registrationForm: FormGroup;
//   // emailCtrl: FormControl
//   // registrationForm:FormGroup
//   // userNameCtrl:FormControl
//   // passwordCtrl:FormControl
//   // addressCtrl:FormGroup
//   // cityCtrl:FormControl
//   // stateCtrl:FormControl
//   // zipCtrl:FormControl
//   // confirmPasswordCtrl:FormControl
//   min=10;
//   max=20;
//   public constructor (private fb:FormBuilder){
//     this.registrationForm = this.fb.group({
//       userName:  ['',
//         [Validators.required,
//         Validators.minLength(4),
//         this.forbiddenNameValidator(/admin/)
//         ]
//       ],
//       age: ['',[Validators.required,
//       this.ageRangeValidator(this.min,this.max)]
//       ]
//     });

    
//   }
//   ngAfterViewInit() {

//    }  

//   ngOnInit(){
     
   
    

//     // this.userNameCtrl = this.fb.control('', [Validators.required,Validators.minLength(3),this.forbiddenNameValidator(/password/)]);
//     // this.emailCtrl= this.fb.control('',[Validators.required])
//     // this.passwordCtrl=this.fb.control('');
//     //  this.confirmPasswordCtrl=this.fb.control(''),
//     //  this.stateCtrl=this.fb.control(''),
//     //  this.cityCtrl=this.fb.control(''),
//     //  this.zipCtrl=this.fb.control('')

     
//   }
//   checkEmail(email){
//  console.log(email);


//   }
//   ageRangeValidator(min:number,max:number):ValidatorFn{
//     return(AbstractControl:AbstractControl): {[key: string]:any}| null=>{
//       if(AbstractControl.value!=="" && (isNaN(AbstractControl.value) || AbstractControl.value < min ||  AbstractControl.value> max))
//       {
//         return {'ageRange': {value:AbstractControl.value}};
//       }
//      return null;
      
//     }
//   }
 
//    pattern(reg: RegExp) : ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } => {
//         var value = <string>control.value;
//         return value.match(reg) ? null : { 'pattern': { value } };
//     }
//   }
//   forbiddenNameValidator(forbiddenName:RegExp): ValidatorFn {
//     return (control:AbstractControl): {[key: string]: any}|null=>{  
//            const forbidden=  forbiddenName.test(control.value);
//       return forbidden ?{'forbiddenName':{value:control.value}}:null;
//    }
//   }  
  


// // get userName(){
// //   console.log(this.registrationForm.get('userName'))
// // return this.registrationForm.get('userName');

// // }
// // registrationForm=new FormGroup( {


// //   userName:new FormControl('Shyam'),
// //   password:new FormControl(''),
// //   confirmPassword:new FormControl(''),
// //   address:new FormGroup({
// //   city:new FormControl(''),
// //   state:new FormControl(''),
// //   zip:new FormControl('')
// // })  
// // });
//   loadApiData()
//   {
//   this.registrationForm.patchValue({

//     userName:'Bruce',
//     password :'test',
//     confirmPassword:'test',


//   })



//   }
  

}
      



