import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productnav',
  templateUrl: './productnav.component.html',
  styleUrls: ['./productnav.component.scss']
})
export class ProductnavComponent  implements OnInit{
  productlist:any=[];
  
constructor(private productservice:ProductServiceService)
{

}
  ngOnInit(): void {
   this.productlist=this.productservice.GetAllProducts();
  }
  discount()
  {
  
    console.log("discount");
    window.alert("hello from discount")
  }
  withoutdiscount(){

    console.log("nodisciyunt");
    window.alert("hello from Without discount")
  }
}
