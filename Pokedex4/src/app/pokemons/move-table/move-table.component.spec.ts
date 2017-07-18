import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveTableComponent } from './move-table.component';

describe('MoveTableComponent', () => {
  let component: MoveTableComponent;
  let fixture: ComponentFixture<MoveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
