import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucknorrisComponent } from './chucknorris.component';

describe('ChucknorrisComponent', () => {
  let component: ChucknorrisComponent;
  let fixture: ComponentFixture<ChucknorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChucknorrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucknorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
