import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card.component";
import { CardTitleComponent } from './card-title/card-title.component';


@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
