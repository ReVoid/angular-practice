import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: '[app-card-content]',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent {
  @HostBinding('class')
  get classNames(): string {
    return 'block';
  }
}
