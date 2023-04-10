import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  postslist:any=[];
  commentslist:any=[];
  errormessage="";
  ngOnInit(): void {
    
  }
constructor(private posts:ProductServiceService,private router:Router)
{
this.posts.GetAllPosts().subscribe({
  next:data=>(this.postslist)=data,
  error:(error: string)=>this.errormessage=error
 })
}
viewcomments(item:any)
{
this.router.navigate(["/singlepost",item.id]);

}
}
