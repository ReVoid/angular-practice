import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
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
    this.pageNumberChange.emit(payload);
  }

  nextPage(){
    const payload = this.pageNumber + 1
    this.pageNumberChange.emit(payload);
  }

  onPageNumberChange(v: number) {
    this.pageNumberChange.emit(v)
  }
}
