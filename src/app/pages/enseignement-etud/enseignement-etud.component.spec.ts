import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementEtudComponent } from './enseignement-etud.component';

describe('EnseignementEtudComponent', () => {
  let component: EnseignementEtudComponent;
  let fixture: ComponentFixture<EnseignementEtudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignementEtudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
