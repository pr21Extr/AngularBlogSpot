import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CardComponent } from './card-component/card-component.component';

const routes: Routes = [
  {
    path: 'blog',
    component: HomeComponent
  },
  {
    path: '',
    component: CardComponent
  },
  {
      path: 'blog/:id',
      component: BlogPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
