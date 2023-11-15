import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Observable, debounceTime, distinctUntilChanged, startWith, switchMap, catchError, of } from "rxjs";

import { PostService, IPost } from "../../services/post.service";


@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})
export class PostListPageComponent implements OnInit {

  public query = new FormControl<string>('', { nonNullable: true });

  public posts$: Observable<IPost[]> = new Observable<IPost[]>();

  constructor(private repository: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.query.valueChanges.pipe(
      startWith(''), // force to emit a start value
      debounceTime(400), // prevent frequent requests
      distinctUntilChanged(), // prevent duplicated values
      switchMap((value) => {
        if(value.length > 0) {
          return this.repository.search({
            title: value,
          })
        } else {
          return this.repository.index();
        }
      }),
      catchError(() => of([])), // fallback an empty data on error
    );
  }
}
