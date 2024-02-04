import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-page-size-picker',
  templateUrl: './page-size-picker.component.html',
  styleUrls: ['./page-size-picker.component.scss']
})
export class PageSizePickerComponent {
  @Input()
  pageSize: number = -1;

  @Output()
  pageSizeChange = new EventEmitter<number>();

  @Input()
  pageSizeOptions: number[] = [10, 20, 30];

  onPageSizeChange(v: number) {
    this.pageSizeChange.emit(v);
  }
}
