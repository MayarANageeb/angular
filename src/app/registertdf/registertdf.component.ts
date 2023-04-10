import { Component } from '@angular/core';
import { register } from '../redister';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-registertdf',
  templateUrl: './registertdf.component.html',
  styleUrls: ['./registertdf.component.scss']
})
export class RegistertdfComponent {
SocialMedia:any=["FaceBook","Google","Twitter","Instagram"]
Registerform= new register("","","","","")
constructor(private enrollservice:EnrollService)
{

}
submitdata(){
this.enrollservice.enroll(this.Registerform).subscribe({
  next:data=>console.log(data),
  error:error=>console.log(error)
});
}
}
  