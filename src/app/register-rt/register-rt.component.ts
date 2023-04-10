import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { firstnamevalidation } from '../Validators/firstName.validators';
import { passwordvalidators } from '../Validators/passwordconfirmed.validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import{passwordvalidators} from '../Validators/firstName.validators';


@Component({
  selector: 'app-register-rt',
  templateUrl: './register-rt.component.html',
  styleUrls: ['./register-rt.component.scss']
})
export class RegisterRtComponent implements OnInit {
[x: string]: any;
error:string=""

ngOnInit(): void {
  //throw new Error('Method not implemented.');
}
// registerform:FormGroup =new FormGroup(
//   {
//     First_name:new FormControl(null,Validators.maxLength(20)),
//     Last_name:new FormControl(null, [Validators.maxLength(20),Validators.required]),
//     Email:new FormControl(null,[Validators.email, Validators.required]),
//     Password:new FormControl(null,[Validators.pattern('^[A-Z][a-z]{4-8}'),Validators.required]),
//     ConfirmPassword:new FormControl(null,[Validators.pattern('^[A-Z][a-z]{4-8}'),Validators.required]),
//     address:new FormGroup({
//       state:new FormControl(''),
//       city:new FormControl(''),
//       postalcode:new FormControl('')
      
//     })

//   }
// )
registerForm=this.fb.group( 
  {
    First_name:this.fb.control('',[Validators.required,Validators.maxLength(10),Validators.minLength(3),firstnamevalidation]),
    Last_name:this.fb.control(''),
    Email:this.fb.control(''),
    subscribe:false,
    aleternativeEmails:this.fb.array([]),
    Password:this.fb.control(''),
   
    ConfirmPassword:this.fb.control(''),
    address:this.fb.group({
      state:this.fb.control(''),
      city:this.fb.control(''),
      postalcode:this.fb.control('')
      
    })

  },{validator:[passwordvalidators]}
)
constructor(private fb:FormBuilder,private registerservice:AuthService,private route:Router)
{}
  
get aleternativeEmails()
{
  return this.registerForm.get('aleternativeEmails') as FormArray;
}
AddAlternativEmails()
{
  this.aleternativeEmails.push(this.fb.control(''));
}
deleteEmail(i:any)
{
  this.aleternativeEmails.removeAt(i);
}
registerdata(registerForm:FormGroup)
{
 console.log(registerForm.value);
 
 this.registerservice.register(registerForm.value).subscribe((response)=>
  {
   if(response.message=='success')
      {
 this.route.navigate(['login']);
   }
   else
   {
 this.error=response.error.email.message;
   }
  })
 //localStorage.setItem(this.registerForm.value,JSON.stringify(this.registerForm));
}

setemailvalidation()
{
  this.registerForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>
    {
      if(checkedValue)
      {
          this.registerForm.get('Email')?.setValidators(Validators.required);
      }
      else{
        this.registerForm.get('Email')?.clearValidators();
      }
      this.registerForm.get('Email')?.updateValueAndValidity();
    })
}

}
// [Validators.required,Validators.minLength(3),Validators.maxLength(20)]


// Last_name:this.fb.control('', [Validators.maxLength(20),Validators.required]),
// Email:this.fb.control('',[Validators.email, Validators.required]),
// Password:this.fb.control('',[Validators.pattern('^[A-Z][a-z]{4-8}'),Validators.required]),
// ConfirmPassword:this.fb.control('',[Validators.pattern('^[A-Z][a-z]{4-8}'),Validators.required]),
// address:this.fb.group({
//   state:this.fb.control(''),
//   city:this.fb.control(''),
//   postalcode:this.fb.control('')