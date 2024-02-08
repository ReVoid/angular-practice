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
  combineLatest,
  shareReplay,
} from "rxjs";

import { LoadingIndicationService } from "../../services/loading-indication.service";

import { IProductPagedList, ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-list-page',
  templateUrl:  './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  constructor(
    private readonly repository: ProductService,
    private readonly loading: LoadingIndicationService,
  ) {}

  public query = new FormControl<string>('', { nonNullable: true });

  public page = new FormControl<number>(1, { nonNullable: true });

  public data$: Observable<IProductPagedList> = of({
    products: [],
    limit: 10,
    skip: 0,
    total: 0,
  });

  public payload$!: Observable<[string, number]>;

  private fetchData(query: string, page: number = 1, size: number = 10): Observable<IProductPagedList> {
    const result$ = query
      ? this.repository.search(query, { page, size })
      : this.repository.index({ page, size });

    // Show loading indicator until request done
    return this.loading.show(result$);
  }

  ngOnInit() {
    const query$ = this.query.valueChanges.pipe(
      map(v => v.trim().toLowerCase()), // prevent empty strings
      debounceTime(400), // prevent frequent requests
      distinctUntilChanged(), // prevent duplicated values
    );

    const page$ = this.page.valueChanges.pipe(
      debounceTime(400), // prevent frequent requests
    );

    this.payload$ = combineLatest([
      query$.pipe(
        startWith(this.query.value), // triggers first request
      ),
      page$.pipe(
        startWith(this.page.value), // triggers first request
      ),
    ]);

    this.data$ = this.payload$.pipe(
      switchMap(([query, page]) => this.fetchData(query, page)),
      shareReplay(), // prevent duplicated requests
      catchError(() => of({
        products: [],
        limit: 0,
        skip: 0,
        total: 0,
      })), // fallback an empty data on error
    );
  }
}
