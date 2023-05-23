import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public index(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }

  public item(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/user/${id}`)
  }
}
