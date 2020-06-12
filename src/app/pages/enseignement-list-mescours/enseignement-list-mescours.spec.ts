import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementListMescoursComponent} from './enseignement-list-mescours.component';

describe('EnseignementListMescoursComponent', () => {
  let component: EnseignementListMescoursComponent;
  let fixture: ComponentFixture<EnseignementListMescoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignementListMescoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementListMescoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
