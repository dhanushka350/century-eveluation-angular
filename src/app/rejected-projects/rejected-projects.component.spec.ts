import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedProjectsComponent } from './rejected-projects.component';

describe('RejectedProjectsComponent', () => {
  let component: RejectedProjectsComponent;
  let fixture: ComponentFixture<RejectedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
