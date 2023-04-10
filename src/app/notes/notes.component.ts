import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { namevalidation } from '../Validators/name.validators';
import { ICategory } from '../Shared Classes and types/icategory';
import { IProduct } from '../main/main.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  CategoryList!:ICategory[];
  ProductList!:IProduct[];
 
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  constructor(private fb:FormBuilder)
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
  notesForm=this.fb.group(
    {
      name:this.fb.control(null,[Validators.required,namevalidation]),
      product:this.fb.control(null),
      value:this.fb.control(null),
      comments:this.fb.array([]),
      
      newcomment:this.fb.control(null),
      discount:this.fb.control(false)
    }
  )
  notesdata(notesForm:FormGroup)
  {
    return console.log(this.notesForm.value);
  }
  get comments()
{
  return this.notesForm.get('comments') as FormArray;
}
  Discountvalidation()
{
  this.notesForm.get('discount')?.valueChanges.subscribe(checkedValue=>
    {
      if(checkedValue)
      {
        this.notesForm.get('value')?.setValidators(Validators.required);
      }
      else{
        this.notesForm.get('value')?.clearValidators();
        this.notesForm.get('value')?.setValue(null);
      }
      this.notesForm.get('value')?.updateValueAndValidity();
    })
}
addcomment()
{
  
  this.comments.push(this.fb.control(''));
}
deleteComment(index:any)
{
this.comments.removeAt(index);
}
}
