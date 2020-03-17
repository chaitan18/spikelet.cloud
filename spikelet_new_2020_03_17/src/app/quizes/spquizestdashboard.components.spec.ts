import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizestDashboardComponent } from './spquizesdashboard.component';

describe('SpquizestDashboardComponent', () => {
  let component: SpquizestDashboardComponent;
  let fixture: ComponentFixture<SpquizestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
