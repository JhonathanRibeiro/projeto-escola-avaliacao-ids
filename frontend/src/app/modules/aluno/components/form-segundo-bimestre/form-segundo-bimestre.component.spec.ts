import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSegundoBimestreComponent } from './form-segundo-bimestre.component';

describe('FormSegundoBimestreComponent', () => {
  let component: FormSegundoBimestreComponent;
  let fixture: ComponentFixture<FormSegundoBimestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSegundoBimestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSegundoBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
