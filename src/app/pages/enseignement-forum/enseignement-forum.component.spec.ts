import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementForumComponent } from './enseignement-forum.component';

describe('EnseignementForumComponent', () => {
  let component: EnseignementForumComponent;
  let fixture: ComponentFixture<EnseignementForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignementForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
