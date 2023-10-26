import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IPost {
  userId: number,
  title: string,
  body: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  public index(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }

  public item(id: number): Observable<IPost> {
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public search(userId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)
  }
}
