import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostItemPageComponent } from "./views/post-item-page/post-item-page.component";
import { PostCreatePageComponent } from "./views/post-create-page/post-create-page.component";
import { PostListPageComponent } from "./views/post-list-page/post-list-page.component";
import { UiListPageComponent } from "./views/ui-list-page/ui-list-page.component";
import { HttpErrorPageComponent } from "./views/http-error-page/http-error-page.component";
import { ProductListPageComponent } from "./views/product-list-page/product-list-page.component";
import { ProductItemPageComponent } from "./views/product-item-page/product-item-page.component";

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
  {
    title: 'Posts',
    path: 'posts',
    component: PostListPageComponent,
  },
  {
    title: 'Post',
    path: 'posts/:id',
    component: PostItemPageComponent,
  },
  {
    title: 'Post | Create',
    path: 'posts/create',
    component: PostCreatePageComponent,
  },
  {
    title: 'Products',
    path: 'products',
    component: ProductListPageComponent,
  },
  {
    title: 'Product',
    path: 'products/:id',
    component: ProductItemPageComponent,
  },
  {
    title: 'UI',
    path: 'ui',
    component: UiListPageComponent,
  },
  {
    title: 'Error',
    path: '**',
    component: HttpErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
