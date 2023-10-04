import { Component, HostBinding } from '@angular/core';

@Component({
  selector: '[app-label]',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @HostBinding('class')
  classNames: string = 'block mb-2 text-sm font-medium text-gray-900';
}
