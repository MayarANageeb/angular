import { Injectable } from '@angular/core';
import { IProduct } from '../main/main.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, filter, map , pipe, throwError } from 'rxjs';
import { Iproduct } from '../product';
import { IUsers } from '../users';
import { IPosts } from '../posts';
import { IComments } from '../comment';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList!:IProduct[];
  ProductLists!:Iproduct[];

  
 
  _url:string="/assets/Data/products.json"
  _urlusers="https://jsonplaceholder.typicode.com/users"
  _urlposts="https://jsonplaceholder.typicode.com/posts"
  _urlcomments="https://jsonplaceholder.typicode.com/posts/1/comments"
  constructor(private httpclient:HttpClient) {}
  GetAllProducts()
  {
return([
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
}]);

  }
  GetProductById(prdId:number):Observable<Iproduct>
  {
    //   return this.GetAllProducts().pipe(map((ProductLists:Iproduct[])=>ProductLists.find(p=>p.ID==prdId)),
    //   catchError((err)=>{return throwError(()=>err.message||"server error");
    // }));
     
       return this.httpclient.get<Iproduct>(this._url).pipe(catchError((err)=>
   {return throwError(()=>err.message||"server error")}
   ))
  }


  //  return this.httpclient.get<Iproduct>(this._url).pipe(catchError((err)=>
  //  {return throwError(()=>err.message||"server error")}
  //  ))

   
  GetAllUsers():Observable<IUsers>
  {
    return this.httpclient.get<IUsers>(this._urlusers).pipe(catchError((err)=>
    {return throwError(()=>err.message||"server error")}
    ))
  }
  GetAllPosts():Observable<IPosts>
  {  return this.httpclient.get<IPosts>(this._urlposts).pipe(catchError((err)=>
    {return throwError(()=>err.message||"server error")}
    ))

  }
  viewcomments(item:any):Observable<IComments>
  {
return this.httpclient.get<IComments>(this._urlcomments).pipe(catchError((err)=>
    {return throwError(()=>err.message||"server error")}
    ))

  }
}


