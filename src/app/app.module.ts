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

@NgModule({
  declarations: [
    AppComponent,
    PostListPageComponent,
    PostItemPageComponent,
    UiListPageComponent,
    HttpErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  routes = routes;
}
