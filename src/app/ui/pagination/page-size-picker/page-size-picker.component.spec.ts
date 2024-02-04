import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizePickerComponent } from './page-size-picker.component';

describe('PageSizePickerComponent', () => {
  let component: PageSizePickerComponent;
  let fixture: ComponentFixture<PageSizePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSizePickerComponent]
    });
    fixture = TestBed.createComponent(PageSizePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
