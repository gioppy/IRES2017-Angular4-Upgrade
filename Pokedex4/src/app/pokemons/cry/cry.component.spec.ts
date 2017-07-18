import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryComponent } from './cry.component';

describe('CryComponent', () => {
  let component: CryComponent;
  let fixture: ComponentFixture<CryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
