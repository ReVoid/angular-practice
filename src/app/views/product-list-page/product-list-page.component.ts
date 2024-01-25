import { Component, OnInit } from '@angular/core';
import { Observable, of, map } from "rxjs";
import { IProductPagedList, ProductService } from "../../services/product.service";

type Products = IProductPagedList['products'];

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  public products$: Observable<Products> = of([]);

  constructor(private readonly repository: ProductService) {}

  ngOnInit() {
    this.products$ = this.repository
    .index()
    .pipe(
      map(i => i.products),
    );
  }
}
