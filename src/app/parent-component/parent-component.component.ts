import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../main/main.component';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  datafromchild!:any;
  @ViewChild(ChildComponentComponent) child!: ChildComponentComponent;

  ngAfterViewInit():void
  {
     this.child.SayWelcome();
  }

}
