import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Al3ulumBaadPage } from './al3ulum-baad.page';

describe('Al3ulumBaadPage', () => {
  let component: Al3ulumBaadPage;
  let fixture: ComponentFixture<Al3ulumBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Al3ulumBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Al3ulumBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
