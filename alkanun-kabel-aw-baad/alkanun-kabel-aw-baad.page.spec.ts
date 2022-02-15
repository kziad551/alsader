import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkanunKabelAwBaadPage } from './alkanun-kabel-aw-baad.page';

describe('AlkanunKabelAwBaadPage', () => {
  let component: AlkanunKabelAwBaadPage;
  let fixture: ComponentFixture<AlkanunKabelAwBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkanunKabelAwBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkanunKabelAwBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
