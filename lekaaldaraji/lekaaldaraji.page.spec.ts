import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekaaldarajiPage } from './lekaaldaraji.page';

describe('LekaaldarajiPage', () => {
  let component: LekaaldarajiPage;
  let fixture: ComponentFixture<LekaaldarajiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaaldarajiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekaaldarajiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
