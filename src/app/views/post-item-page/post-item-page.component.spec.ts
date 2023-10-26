import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemPageComponent } from './post-item-page.component';

describe('PostItemPageComponent', () => {
  let component: PostItemPageComponent;
  let fixture: ComponentFixture<PostItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostItemPageComponent]
    });
    fixture = TestBed.createComponent(PostItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
