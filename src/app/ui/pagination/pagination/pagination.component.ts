import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PaginationComponent,
      multi: true,
    }
  ],
})
export class PaginationComponent implements ControlValueAccessor {
  @HostBinding('class')
  get classNames() {
    return 'flex flex-row';
  }

  @Input()
  pageNumber: number = -1;

  @Output()
  pageNumberChange = new EventEmitter<number>();

  @Input()
  pageSize: number = 0;

  @Input()
  itemsTotal: number = 0;

  get pages(): number [] {
    const total = this.itemsTotal > 0 && this.pageSize > 0
      ? this.itemsTotal / this.pageSize
      : 0;

    return [...Array(Math.ceil(total)).keys()].map(i => i + 1); // [1, 2, 3, ...]
  }

  get pageTotal(): number {
    return Math.ceil(this.itemsTotal / this.pageSize);
  }

  get hasPrevPage(): boolean {
    return this.pageNumber > 1;
  }

  get hasNextPage(): boolean {
    return this.pageNumber < this.pageTotal;
  }

  prevPage() {
    const payload = this.pageNumber - 1
    this.onPageNumberChange(payload);
  }

  nextPage(){
    const payload = this.pageNumber > 0
      ? this.pageNumber + 1
      : 1;

    this.onPageNumberChange(payload);
  }

  onPageNumberChange(v: number) {
    this.pageNumber = v;
    this.pageNumberChange.emit(v)
    this.onChange(v);
  }

  onChange = (payload: number) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(v: number): void {
    if (Number.isFinite(v) && v !== this.pageNumber) {
      this.onPageNumberChange(v);
    }
  }
}
