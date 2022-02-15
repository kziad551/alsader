import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MareyatPage } from './mareyat.page';

describe('MareyatPage', () => {
  let component: MareyatPage;
  let fixture: ComponentFixture<MareyatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MareyatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MareyatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
