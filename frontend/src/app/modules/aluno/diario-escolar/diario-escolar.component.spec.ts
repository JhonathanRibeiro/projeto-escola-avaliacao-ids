import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioEscolarComponent } from './diario-escolar.component';

describe('DiarioEscolarComponent', () => {
  let component: DiarioEscolarComponent;
  let fixture: ComponentFixture<DiarioEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioEscolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
