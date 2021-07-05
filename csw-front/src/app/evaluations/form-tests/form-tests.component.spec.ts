import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestsComponent } from './form-tests.component';

describe('FormTestsComponent', () => {
  let component: FormTestsComponent;
  let fixture: ComponentFixture<FormTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
