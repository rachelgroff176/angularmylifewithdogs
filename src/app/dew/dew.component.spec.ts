import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewComponent } from './dew.component';

describe('DewComponent', () => {
  let component: DewComponent;
  let fixture: ComponentFixture<DewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
