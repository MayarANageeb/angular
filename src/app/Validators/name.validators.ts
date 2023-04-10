import { AbstractControl } from "@angular/forms";

export function namevalidation(control:AbstractControl)
{
    
const namevalidation=/Admin/.test(control.value)||/adminstrator/.test(control.value);


return namevalidation ?{'namevalidation':{value:control.value}}: null;
    
}
