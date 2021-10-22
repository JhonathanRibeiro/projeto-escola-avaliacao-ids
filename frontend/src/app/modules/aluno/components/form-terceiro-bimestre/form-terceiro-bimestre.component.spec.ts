import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTerceiroBimestreComponent } from './form-terceiro-bimestre.component';

describe('FormTerceiroBimestreComponent', () => {
  let component: FormTerceiroBimestreComponent;
  let fixture: ComponentFixture<FormTerceiroBimestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTerceiroBimestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTerceiroBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
