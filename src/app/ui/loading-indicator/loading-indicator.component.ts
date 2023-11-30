import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
  get classNames() {
    // TODO: Refactor it later
    const base: string = 'inline text-gray-200 animate-spin dark:text-gray-600 fill-blue-600';
    const size: string = 'w-10 h-10'; // TODO: implement with @Input
    return [size, base].join(' ');
  }
}
