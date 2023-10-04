import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from "../label/label.component";
import { InputComponent } from "../input/input.component";
import { FormFieldComponent } from "./form-field.component";



@NgModule({
  declarations: [
    FormFieldComponent,
    LabelComponent,
    InputComponent,
  ],
  exports: [
    FormFieldComponent,
    LabelComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class FormFieldModule { }
