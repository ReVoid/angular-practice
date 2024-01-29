import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  Observable,
  switchMap,
  catchError,
  of,
  map,
  startWith,
  debounceTime,
  distinctUntilChanged,
} from "rxjs";

import { IProductPagedList, ProductService } from "../../services/product.service";

type Products = IProductPagedList['products'];

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  public products$: Observable<Products> = of([]);

  public query = new FormControl<string>('', { nonNullable: true });

  constructor(
    private readonly repository: ProductService,
  ) {}

  ngOnInit() {
    const query$ = this.query.valueChanges.pipe(
      startWith(''), // force to emit a start value
      map(v => v && v.trim() ? v : ''), // prevent empty strings
      debounceTime(400), // prevent frequent requests
      distinctUntilChanged(), // prevent duplicated values
    );

    this.products$ = query$.pipe(
      switchMap((value) => {
        if (value) {
          return this.repository.search(value).pipe(
            map(v => v.products),
          );
        } else {
          return this.repository.index().pipe(
            map(v => v.products),
          );
        }
      }),
      catchError(() => of([])), // fallback an empty data on error
    );
  }
}
