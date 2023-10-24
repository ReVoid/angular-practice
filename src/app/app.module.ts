import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from "./ui/ui.module";

// Pages
import { PostListPageComponent } from './views/post-list-page/post-list-page.component';
import { UiListPageComponent } from './views/ui-list-page/ui-list-page.component';
import { HttpErrorPageComponent } from './views/http-error-page/http-error-page.component';

import { routes } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PostListPageComponent,
    UiListPageComponent,
    HttpErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  routes = routes;
}
