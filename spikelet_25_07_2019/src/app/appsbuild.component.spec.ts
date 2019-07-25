import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsBuildComponent } from './appsbuild.component';

describe('AppsBuildComponent', () => {
  let component: AppsBuildComponent;
  let fixture: ComponentFixture<AppsBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
