import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";
import { IPost, PostService } from "../../services/post.service";

@Component({
  selector: 'app-post-item-page',
  templateUrl: './post-item-page.component.html',
  styleUrls: ['./post-item-page.component.scss']
})
export class PostItemPageComponent implements OnInit {

  post$: Observable<IPost> = new Observable<IPost>();

  constructor(private repository: PostService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.params
    .pipe<number>(map((i)=> i['id']))
    .subscribe((id) => {
      this.post$ = this.repository.item(id);
    });
  }
}
