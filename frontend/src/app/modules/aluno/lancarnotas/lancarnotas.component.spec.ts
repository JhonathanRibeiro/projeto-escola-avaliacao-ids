import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarnotasComponent } from './lancarnotas.component';

describe('LancarnotasComponent', () => {
  let component: LancarnotasComponent;
  let fixture: ComponentFixture<LancarnotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancarnotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancarnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
