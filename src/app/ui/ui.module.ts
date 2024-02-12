import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { FormFieldModule } from "./form-field/form-field.module";
import { CardModule } from "./card/card.module";
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { PaginationModule } from "./pagination/pagination.module";


@NgModule({
  declarations: [
    ButtonComponent,
    LoadingIndicatorComponent,
  ],
  exports: [
    ButtonComponent,
    FormFieldModule,
    LoadingIndicatorComponent,
    CardModule,
  ],
  imports: [
    CommonModule,
    CardModule,
    FormFieldModule,
    PaginationModule,
  ]
})
export class UiModule { }
