import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-produtcbyid',
  templateUrl: './produtcbyid.component.html',
  styleUrls: ['./produtcbyid.component.scss']
})
export class ProdutcbyidComponent implements OnInit{
  employe:any;
  errormessage="";
constructor(private productservice:ProductServiceService)
{


}
  ngOnInit(): void {
   this.productservice.GetProductById(1).subscribe({
    next:data=>(this.employe)=data,
    error:(error: string)=>this.errormessage=error
   }
   )
  }
}
