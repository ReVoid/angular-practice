import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import { Observable } from "rxjs";

import { IPost } from "../../services/post.service";

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})
export class PostListPageComponent implements OnInit {


  public posts$: Observable<IPost[]> = new Observable<IPost[]>();

  constructor(private repository: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.repository.index();
  }
}
