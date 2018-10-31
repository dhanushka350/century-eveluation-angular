import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreawiseProjectsComponent } from './areawise-projects.component';

describe('AreawiseProjectsComponent', () => {
  let component: AreawiseProjectsComponent;
  let fixture: ComponentFixture<AreawiseProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreawiseProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreawiseProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
