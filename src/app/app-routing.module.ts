import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ProductnavComponent } from './productnav/productnav.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { LogintdfComponent } from './logintdf/logintdf.component';
import { RegistertdfComponent } from './registertdf/registertdf.component';
import { RegisterRtComponent } from './register-rt/register-rt.component';
import { NotesComponent } from './notes/notes.component';



const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'posts',component:PostsComponent},
  {path:'users',component:UsersComponent},
  {path:'products',component:ProductnavComponent},
  {path:'Home',component:MainComponent},
  {path:'singlepost/:id',component:SinglepostComponent},
  {path:'login',component:LogintdfComponent},
  {path:'register',component:RegistertdfComponent},
  {path:'registerReactive',component:RegisterRtComponent},
  {path:'notes',component:NotesComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
