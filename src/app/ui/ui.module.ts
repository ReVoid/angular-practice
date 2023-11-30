import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { FormFieldModule } from "./form-field/form-field.module";
import { CardModule } from "./card/card.module";
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LoadingIndicatorComponent,
  ],
  exports: [
    ButtonComponent,
    FormFieldModule,
    LoadingIndicatorComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    FormFieldModule,
  ]
})
export class UiModule { }
