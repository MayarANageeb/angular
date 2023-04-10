import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  userslist:any=[];
  errormessage="";
  ngOnInit(): void {

  }
constructor(private product:ProductServiceService)
{
  this.product.GetAllUsers().subscribe({
    next:data=>(this.userslist)=data,
    error:(error: string)=>this.errormessage=error
   })
}
}

