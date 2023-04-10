import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { register } from './redister';

@Injectable({
  providedIn: 'root'
})
export class EnrollService implements OnInit {
_url:string ="http://localhost:3000";
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  enroll(Registerform:register)
  {
     return this.http.post(this._url,Registerform);
  }
}
