import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassworkComponent } from './myclasswork.component';

describe('MyclassworkComponent', () => {
  let component: MyclassworkComponent;
  let fixture: ComponentFixture<MyclassworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyclassworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
