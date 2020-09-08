import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementForumComponent } from './enseignement-forum.component';
import {Cours} from "../../controller/model/cours.model";

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
