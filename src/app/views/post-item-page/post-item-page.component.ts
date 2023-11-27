import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, shareReplay, switchMap, map } from "rxjs";
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
    // Get the strongly typed post.id
    const postId$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id') || '-1')),
    );

    // Get post
    this.post$ = postId$.pipe(
      switchMap((postId) => this.repository.item(postId)),
      shareReplay(1), // prevent request duplication
    );

    // Then sequentially get post's comments
    this.comments$ = this.post$.pipe(
      switchMap((post) => this.comment.search({
        postId: post.id,
      }))
    );
  }
}
