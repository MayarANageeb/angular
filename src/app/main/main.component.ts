import { Component } from '@angular/core';
import { ICategory } from '../Shared Classes and types/icategory';
export enum DiscountOffers {
  NoDiscount = 'No Discount',
  tenpersent = '10%',
  fiftenPersent = '15%',

}
export interface IProduct {
  ID :  number;
  Name :string;
  Quantity: number;
  Price: number;
  Img :  string;
  }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
Discount!: DiscountOffers; 
Storename!: string;
StoreLogo!:string;
clientName!:string;
ProductList!:IProduct[];
CategoryList!:ICategory[];
IsPurshased!: Boolean;
message="";

constructor()
 {
this.Discount=DiscountOffers.NoDiscount;
this.Storename="Store";
this.StoreLogo="./assets/img/nav.jpg";
this.IsPurshased=true;
this.clientName="Mayar";
this.CategoryList=[{
  'ID':1,
  'Name':"Men"
},
{
  'ID':2,
  'Name':"Women" 
},
{
  'ID':3,
  'Name':"Kids"
}];
this.ProductList=[
  {
    ID: 1,
    Name: 'T-shirt',
    Quantity:10,
    Price:1500,
    Img:"1.jpg"
},
{
    ID: 2,
    Name: 'shirt',
    Quantity:10,
    Price:1500,
    Img:"2.jpg"
},
{
    ID: 3,
    Name: 'Blouse',
    Quantity:10,
    Price:1500,
    Img:"3.jpg"
},  {
    ID: 4,
    Name: 'skirt',
    Quantity:10,
    Price:1500,
    Img:"4.jpg"
},
]
 }


}

