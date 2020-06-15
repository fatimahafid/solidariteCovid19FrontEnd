import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoisinageOffreComponent } from './voisinage-offre.component';

describe('VoisinageOffreComponent', () => {
  let component: VoisinageOffreComponent;
  let fixture: ComponentFixture<VoisinageOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoisinageOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoisinageOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
