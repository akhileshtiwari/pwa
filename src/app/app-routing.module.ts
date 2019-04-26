import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ShowPostsComponent } from './show-posts/show-posts.component';


const routes: Routes = [
  { path: 'posts', component: ShowPostsComponent },
  { path: '*', redirectTo: 'posts' }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

