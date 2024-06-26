import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @HostBinding('class')
  get classNames(): string {
    return 'block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700';
  }
}
