import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: '[app-card-title]',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent {
  @HostBinding('class')
  get classNames(): string {
    return 'text-xl font-bold text-black dark:text-white';
  }
}
