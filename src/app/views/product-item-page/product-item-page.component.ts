import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {
  Observable,
  map,
  shareReplay,
  switchMap,
} from "rxjs";

import {
  IProduct,
  ProductService,
} from "../../services/product.service";

@Component({
  selector: 'app-product-item-page',
  templateUrl: './product-item-page.component.html',
  styleUrls: ['./product-item-page.component.scss']
})
export class ProductItemPageComponent implements OnInit {
  product$: Observable<IProduct> = new Observable<IProduct>();

  constructor(
    private route: ActivatedRoute,
    private repository: ProductService,
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      map(params => params.get('id') || ''),
    );

    // Get post
    this.product$ = productId$.pipe(
      switchMap((productId) => this.repository.item(productId)),
      shareReplay(1), // prevent request duplication
    );
  }
}
