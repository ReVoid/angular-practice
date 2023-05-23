import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui/button/button.component';
import { CardModule } from "./ui/card/card.module";
import { HttpClientModule } from '@angular/common/http';
import { PostListPageComponent } from './views/post-list-page/post-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PostListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
