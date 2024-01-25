import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from "./ui/ui.module";

// Pages
import { PostListPageComponent } from './views/post-list-page/post-list-page.component';
import { PostItemPageComponent } from './views/post-item-page/post-item-page.component';
import { UiListPageComponent } from './views/ui-list-page/ui-list-page.component';
import { HttpErrorPageComponent } from './views/http-error-page/http-error-page.component';

import { routes } from "./app-routing.module";
import { LoadingIndicationService } from "./services/loading-indication.service";
import { PostCreatePageComponent } from './views/post-create-page/post-create-page.component';
import { ProductListPageComponent } from './views/product-list-page/product-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListPageComponent,
    PostItemPageComponent,
    UiListPageComponent,
    HttpErrorPageComponent,
    PostCreatePageComponent,
    ProductListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoadingIndicationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  routes = routes;
}
