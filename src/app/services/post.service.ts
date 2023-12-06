import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

export interface IPost {
  id: number,
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

  public search(query: Partial<Pick<IPost, 'title'>>): Observable<IPost[]> {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
    .pipe(
      map(response => response.filter(i => i.title.toLowerCase().includes(query.title || '')))
    );
  }

  public create(post: Omit<IPost, 'id'>): Observable<IPost> {
    return this.http.post<IPost>(
      'https://jsonplaceholder.typicode.com/posts',
      post,
    );
  }
}
