import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlusulKabelAwBaadPage } from './alusul-kabel-aw-baad.page';

describe('AlusulKabelAwBaadPage', () => {
  let component: AlusulKabelAwBaadPage;
  let fixture: ComponentFixture<AlusulKabelAwBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulKabelAwBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlusulKabelAwBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
