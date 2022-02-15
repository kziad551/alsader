import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AladabKabelAwBaadPage } from './aladab-kabel-aw-baad.page';

describe('AladabKabelAwBaadPage', () => {
  let component: AladabKabelAwBaadPage;
  let fixture: ComponentFixture<AladabKabelAwBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AladabKabelAwBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AladabKabelAwBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
