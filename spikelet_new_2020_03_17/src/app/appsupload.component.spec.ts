import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsUploadComponent } from './appsupload.component';

describe('AppsUploadComponent', () => {
  let component: AppsUploadComponent;
  let fixture: ComponentFixture<AppsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
