import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinComponent } from './ein.component';

describe('EinComponent', () => {
  let component: EinComponent;
  let fixture: ComponentFixture<EinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
