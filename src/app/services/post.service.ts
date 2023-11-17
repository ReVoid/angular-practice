import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

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

  public search(query: Partial<Pick<IPost, 'userId' | 'title'>>): Observable<IPost[]> {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`, {
      params: new HttpParams().appendAll({
        title: query.title!, // TODO: fix the unsafe reading
      })
    })
  }
}
