import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

export interface IProduct {
  id: number,
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

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL: string = 'https://dummyjson.com';

  constructor(private readonly http: HttpClient) {}

  index(): Observable<IProductPagedList> {
    return this.http.get<IProductPagedList>(
      `${this.BASE_URL}/products`,
      );
  }
}
