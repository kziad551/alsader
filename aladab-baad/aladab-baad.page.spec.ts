import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AladabBaadPage } from './aladab-baad.page';

describe('AladabBaadPage', () => {
  let component: AladabBaadPage;
  let fixture: ComponentFixture<AladabBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AladabBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AladabBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
