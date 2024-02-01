import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

export interface IProduct {
  id: string,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}

export interface IProductPagedList {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number,
}

type PaginationRequest = {
  page: number,
  size: number,
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BASE_URL: string = 'https://dummyjson.com';

  constructor(private readonly http: HttpClient) {}

  index(pagination: PaginationRequest = { page: 0, size: 10 }): Observable<IProductPagedList> {
    return this.http.get<IProductPagedList>(
      `${this.BASE_URL}/products`,
      {
        params: {
          limit: pagination.size,
          skip: pagination.page > 1
            ? pagination.page * pagination.size
            : 0,
        }
      }
    );
  }

  item(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(
      `${this.BASE_URL}/products/${id}`,
    );
  }

  search(query: string, pagination: PaginationRequest = { page: 0, size: 10 }): Observable<IProductPagedList> {
    return this.http.get<IProductPagedList>(
      `${this.BASE_URL}/products/search`, {
        params: {
          q: query,
          limit: pagination.size,
          skip: pagination.page > 1
            ? pagination.page * pagination.size
            : 0,
        }
      }
    );
  }
}
