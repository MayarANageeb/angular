 import { AbstractControl } from "@angular/forms";

export function passwordvalidators(control:AbstractControl)
{
const password=control.get('Password');
const confirmpassword=control.get('ConfirmPassword');


if(password?.pristine||confirmpassword?.pristine)
{
    return null;
}
else {
    return password && confirmpassword && password.value!=confirmpassword.value ?   
    {'MisMatch':true}
    :null;
}
}