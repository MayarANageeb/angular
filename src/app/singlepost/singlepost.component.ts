import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit{
  commentslist:any=[];
  errormessage=""
  constructor(private comments:ProductServiceService)
  {
    this.comments.viewcomments(1).subscribe({
      next:data=>(this.commentslist)=data,
      error:(error: string)=>this.errormessage=error
     })
// this.commentslist=this.comments.viewcomments(1);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
