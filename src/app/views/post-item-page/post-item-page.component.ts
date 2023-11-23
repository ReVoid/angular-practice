import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { IPost, PostService } from "../../services/post.service";
import { IComment, CommentService } from "../../services/comment.service";

@Component({
  selector: 'app-post-item-page',
  templateUrl: './post-item-page.component.html',
  styleUrls: ['./post-item-page.component.scss']
})
export class PostItemPageComponent implements OnInit {

  post$: Observable<IPost> = new Observable<IPost>();
  comments$: Observable<IComment[]> = new Observable<IComment[]>();

  constructor(
    private route: ActivatedRoute,
    private repository: PostService,
    private comment: CommentService,
  ) {}

  ngOnInit() {
    this.post$ = this.route.params
    .pipe(
      switchMap((params) => this.repository.item(params['id'])),
    );

    this.comments$ = this.route.params
      .pipe(
        switchMap((params) => this.comment.search({
          postId: params['id'],
        }) )
      );
  }
}
