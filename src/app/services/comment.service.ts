import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }

  public index(): Observable<IComment[]> {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  public search(query: Partial<Pick<IComment, 'postId'>>): Observable<IComment[]> {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments', {
      params: new HttpParams({ fromObject: query })
    });
  }
}
