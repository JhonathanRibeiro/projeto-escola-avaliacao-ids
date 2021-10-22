import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuartoBimestreComponent } from './form-quarto-bimestre.component';

describe('FormQuartoBimestreComponent', () => {
  let component: FormQuartoBimestreComponent;
  let fixture: ComponentFixture<FormQuartoBimestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQuartoBimestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuartoBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
