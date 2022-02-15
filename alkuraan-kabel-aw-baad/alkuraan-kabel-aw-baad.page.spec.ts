import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkuraanKabelAwBaadPage } from './alkuraan-kabel-aw-baad.page';

describe('AlkuraanKabelAwBaadPage', () => {
  let component: AlkuraanKabelAwBaadPage;
  let fixture: ComponentFixture<AlkuraanKabelAwBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkuraanKabelAwBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkuraanKabelAwBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
