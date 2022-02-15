import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArshefketabePage } from './arshefketabe.page';

describe('ArshefketabePage', () => {
  let component: ArshefketabePage;
  let fixture: ComponentFixture<ArshefketabePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArshefketabePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArshefketabePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
