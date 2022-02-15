import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkutobAkaedeyaKabelAwBaadPage } from './alkutob-akaedeya-kabel-aw-baad.page';

describe('AlkutobAkaedeyaKabelAwBaadPage', () => {
  let component: AlkutobAkaedeyaKabelAwBaadPage;
  let fixture: ComponentFixture<AlkutobAkaedeyaKabelAwBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkutobAkaedeyaKabelAwBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkutobAkaedeyaKabelAwBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
