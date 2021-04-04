import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindexComponent } from './findex.component';

describe('FindexComponent', () => {
  let component: FindexComponent;
  let fixture: ComponentFixture<FindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
