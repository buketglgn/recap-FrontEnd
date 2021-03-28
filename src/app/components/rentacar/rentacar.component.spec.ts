import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentacarComponent } from './rentacar.component';

describe('RentacarComponent', () => {
  let component: RentacarComponent;
  let fixture: ComponentFixture<RentacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
