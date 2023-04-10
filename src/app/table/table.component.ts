import { Component } from '@angular/core';
import { IProduct } from '../main/main.component';
import { ICategory } from '../Shared Classes and types/icategory';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
 
 messgae="";
ProductList!:IProduct[];

  constructor()
  {
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

  }

