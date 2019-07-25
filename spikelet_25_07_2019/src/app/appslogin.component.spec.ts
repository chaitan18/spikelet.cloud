import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsLoginComponent } from './appslogin.component';

describe('AppsLoginComponent', () => {
  let component: AppsLoginComponent;
  let fixture: ComponentFixture<AppsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
