import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IProduct } from '../main/main.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit{

  @Output() childeEvent=new EventEmitter();
  ProductList?:IProduct[]; 
  constructor()
  {
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

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  SendData()
  {
    this.childeEvent.emit(this.ProductList);
    console.log(this.ProductList)
  }
 
  SayWelcome()
  {
  console.log("Welcome...!");
  }
}

