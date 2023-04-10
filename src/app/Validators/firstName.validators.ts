import { AbstractControl } from "@angular/forms";

export function firstnamevalidation(control:AbstractControl)
{
    
const firstnamevalidation=/Admin/.test(control.value);

return firstnamevalidation ?{'firstnamevalidation':{value:control.value}}: null;
    
}


//FactoryPattern
// export function firstnamevalidation(firstnamevalidationname:RegExp)
// {
//     return (control:AbstractControl)=>{
// const firstnamevalidation=firstnamevalidationname.test(control.value);

// return firstnamevalidation ?{'firstnamevalidationname':{value:control.value}}: null;
//     }
// }