import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable, debounceTime, distinctUntilChanged, startWith } from "rxjs";

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
    this.query.valueChanges.pipe(
      startWith(''), // force to emit a start value
      debounceTime(400), // prevent frequent requests
      distinctUntilChanged(), // prevent duplicated values
    ).subscribe((v) => {
      if(v.length > 0) {
        this.posts$ = this.repository.search({
          title: v,
        });
      } else {
        this.posts$ = this.repository.index();
      }
    })
  }
}
