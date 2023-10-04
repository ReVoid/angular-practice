import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { FormFieldModule } from "./form-field/form-field.module";
import { CardModule } from "./card/card.module";



@NgModule({
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
    FormFieldModule,
    FormFieldModule,
  ],
  imports: [
    CommonModule,
    CardModule,
    FormFieldModule,
  ]
})
export class UiModule { }
