import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { IPost, PostService } from "../../services/post.service";

type PostForm = { [K in keyof Omit<IPost, 'id' | 'userId'>]: FormControl<IPost[K]> };

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.scss']
})
export class PostCreatePageComponent {
  public form: FormGroup<PostForm>;

  constructor(private repository: PostService) {
    this.form = new FormGroup<PostForm>({
      title: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
        ],
        nonNullable: true,
      }),
      body: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(350),
        ],
        nonNullable: true,
      }),
    })
  }

  onSubmit() {
    this.repository.create({
        userId: 1, // TODO: remove static value
        ...this.form.getRawValue(),
      }).subscribe();
  }
}
