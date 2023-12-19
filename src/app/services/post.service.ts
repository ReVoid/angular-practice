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

  private readonly BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public index(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.BASE_URL}/posts`)
  }

  public item(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.BASE_URL}/posts/${id}`);
  }

  public search(query: Partial<Pick<IPost, 'title'>>): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.BASE_URL}/posts`)
    .pipe(
      map(response => response.filter(i => i.title.toLowerCase().includes(query.title || '')))
    );
  }

  public create(post: Omit<IPost, 'id'>): Observable<IPost> {
    return this.http.post<IPost>(
      `${this.BASE_URL}/posts`,
      post,
    );
  }

  public update(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(
      `${this.BASE_URL}/posts/${post.id}`,
      post,
    )
  }
}
