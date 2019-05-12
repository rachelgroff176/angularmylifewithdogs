import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddyBearsComponent } from './teddybears.component';

describe('TeddyBearsComponent', () => {
  let component: TeddyBearsComponent;
  let fixture: ComponentFixture<TeddyBearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeddyBearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeddyBearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
