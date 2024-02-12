import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card.component";
import { CardTitleComponent } from './card-title/card-title.component';
import { CardContentComponent } from './card-content/card-content.component';


@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CardModule { }
