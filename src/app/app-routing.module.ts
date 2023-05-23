import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from "./views/post-list-page/post-list-page.component";

const routes: Routes = [
  {
    title: 'Posts',
    path: 'posts',
    component: PostListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
