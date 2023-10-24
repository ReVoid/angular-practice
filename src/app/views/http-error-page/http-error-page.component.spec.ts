import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorPageComponent } from './http-error-page.component';

describe('HttpErrorPageComponent', () => {
  let component: HttpErrorPageComponent;
  let fixture: ComponentFixture<HttpErrorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpErrorPageComponent]
    });
    fixture = TestBed.createComponent(HttpErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
