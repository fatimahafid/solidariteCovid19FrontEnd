import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementCreateurComponent } from './enseignement-createur.component';

describe('EnseignementCreateurComponent', () => {
  let component: EnseignementCreateurComponent;
  let fixture: ComponentFixture<EnseignementCreateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignementCreateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementCreateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
