import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorAlunoComponent } from './identificador-aluno.component';

describe('IdentificadorAlunoComponent', () => {
  let component: IdentificadorAlunoComponent;
  let fixture: ComponentFixture<IdentificadorAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificadorAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificadorAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
