import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListPageComponent } from './ui-list-page.component';

describe('UiListPageComponent', () => {
  let component: UiListPageComponent;
  let fixture: ComponentFixture<UiListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiListPageComponent]
    });
    fixture = TestBed.createComponent(UiListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
