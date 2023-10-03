import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui/button/button.component';
import { CardModule } from "./ui/card/card.module";
import { HttpClientModule } from '@angular/common/http';
import { PostListPageComponent } from './views/post-list-page/post-list-page.component';
import { FormFieldComponent } from './ui/form-field/form-field.component';
import { UiListPageComponent } from './views/ui-list-page/ui-list-page.component';
import { FormFieldModule } from "./ui/form-field/form-field.module";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PostListPageComponent,
    FormFieldComponent,
    UiListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    FormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
