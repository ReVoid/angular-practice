import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from "./views/post-list-page/post-list-page.component";
import { UiListPageComponent } from "./views/ui-list-page/ui-list-page.component";

const routes: Routes = [
  {
    title: 'Posts',
    path: 'posts',
    component: PostListPageComponent
  },
  {
    title: 'UI',
    path: 'ui',
    component: UiListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
