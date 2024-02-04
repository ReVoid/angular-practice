import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  Observable,
  BehaviorSubject,
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

type Products = IProductPagedList['products'];

@Component({
  selector: 'app-product-list-page',
  templateUrl:  './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  public pages$: Observable<Array<number>> = of([]);

  public currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public data$: Observable<IProductPagedList> = of({
    products: [],
    limit: 10,
    skip: 0,
    total: 0,
  });

  public products$: Observable<Products> = of([]);

  public query = new FormControl<string>('', { nonNullable: true });

  constructor(
    private readonly repository: ProductService,
    private readonly loading: LoadingIndicationService,
  ) {}

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

    const payload$ = combineLatest([
      query$,
      this.currentPage$,
    ]).pipe(
      startWith<[string, number]>([this.query.value, 1]), // Triggers request with an initial payload
    );

    this.data$ = payload$.pipe(
      switchMap(([query, page]) => this.fetchData(query, page)),
      shareReplay(1), // prevent duplicated requests
      catchError(() => of({
        products: [],
        limit: 0,
        skip: 0,
        total: 0,
      })), // fallback an empty data on error
    );

    this.products$ = this.data$.pipe(
      map(i => i.products),
    );

    this.pages$ = this.data$.pipe(
      map((data) => {
        const totalPages = Math.ceil(data.total / data.limit);
        return [...Array(totalPages).keys()].map(i => i + 1);
      }),
    )
  }
}
