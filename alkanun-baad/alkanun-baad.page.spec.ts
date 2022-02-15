import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkanunBaadPage } from './alkanun-baad.page';

describe('AlkanunBaadPage', () => {
  let component: AlkanunBaadPage;
  let fixture: ComponentFixture<AlkanunBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkanunBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkanunBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
