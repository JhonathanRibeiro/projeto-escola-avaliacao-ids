import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrimeiroBimestreComponent } from './form-primeiro-bimestre.component';

describe('FormPrimeiroBimestreComponent', () => {
  let component: FormPrimeiroBimestreComponent;
  let fixture: ComponentFixture<FormPrimeiroBimestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrimeiroBimestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrimeiroBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
