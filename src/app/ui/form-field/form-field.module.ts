import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../input/input.component";
import { FormFieldComponent } from "./form-field.component";


@NgModule({
  declarations: [
    FormFieldComponent,
    InputComponent
  ],
  exports: [
    FormFieldComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class FormFieldModule { }
