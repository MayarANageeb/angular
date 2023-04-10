import { Component } from '@angular/core';
import { ICategory } from '../Shared Classes and types/icategory';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
CategoryList!:ICategory[];
constructor()
{
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
}
}
