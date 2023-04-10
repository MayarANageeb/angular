import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { MainComponent } from './main/main.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { TableComponent } from './table/table.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ProductlistComponent } from './services/productlist/productlist.component';
import { HttpClientModule } from "@angular/common/http";
import { ProdutcbyidComponent } from './services/produtcbyid/produtcbyid.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ProductnavComponent } from './productnav/productnav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { LogintdfComponent } from './logintdf/logintdf.component';
import { RegistertdfComponent } from './registertdf/registertdf.component';
import { RegisterRtComponent } from './register-rt/register-rt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Form } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    RightNavComponent,
    MainComponent,
    NgifComponent,
    NgforComponent,
    TableComponent,
    TwoWayBindingComponent,
    EventBindingComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ProductlistComponent,
    ProdutcbyidComponent,
    PostsComponent,
    UsersComponent,
    ProductsComponent,
    ProductnavComponent,
    PageNotFoundComponent,
    SinglepostComponent,
    LogintdfComponent,
    RegistertdfComponent,
    RegisterRtComponent,
    NotesComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
