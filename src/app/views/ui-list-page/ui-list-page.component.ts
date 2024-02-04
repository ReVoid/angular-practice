import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-list-page',
  templateUrl: './ui-list-page.component.html',
  styleUrls: ['./ui-list-page.component.scss']
})
export class UiListPageComponent {
  title: string = 'UI';

  pagination = {
    pageNumber: 3,
    pageSize: 10,
    itemsTotal: 100,
  }

  pageSize = {
    pageSize: 10,
    pageSizes: [5, 10, 15],
  }
}
