import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { IProduct } from 'src/app/main/main.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  productslist:any=[];
 // productbyid:any;

  ngOnInit(): void {
    this.productslist=this.productservice.GetAllProducts();
    //this.productbyid=this.productservice.GetProductById(1);
  }

 constructor(private productservice:ProductServiceService)
 {

 }
  
}
