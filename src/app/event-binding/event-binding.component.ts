import { Component, Input } from '@angular/core';
import { IProduct } from '../main/main.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  IsPurshased: Boolean=true;
  message="";
  clientName!:string;
  ProductList!:IProduct[];
  constructor()
  {
    this.clientName="mayar atef nageeb";
    this.ProductList=[
      {
        ID: 1,
        Name: 'T-shirt',
        Quantity:10,
        Price:1500,
        Img:"./assets/img/1.jpg"
        
    },
    {
        ID: 2,
        Name: 'shirt',
        Quantity:10,
        Price:1500,
        Img:"./assets/img/2.jpg"
    },
    {
        ID: 3,
        Name: 'Blouse',
        Quantity:10,
        Price:1500,
        Img:"./assets/img/3.jpg"
    },  {
        ID: 4,
        Name: 'skirt',
        Quantity:10,
        Price:1500,
        Img:"./assets/img/4.jpg"
    },
    ]
  }

Buy($event: any) 
{
if(this.IsPurshased)
{
  this.IsPurshased=false;
  console.log("false")
}
else{
  this.IsPurshased=true;
  console.log("true");
}
}
}
