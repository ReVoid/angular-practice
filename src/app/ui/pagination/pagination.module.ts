import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PaginationComponent } from './pagination/pagination.component';
import { PageSizePickerComponent } from './page-size-picker/page-size-picker.component';

@NgModule({
  declarations: [
    PaginationComponent,
    PageSizePickerComponent
  ],
  exports: [
    PaginationComponent,
    PageSizePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PaginationModule { }
