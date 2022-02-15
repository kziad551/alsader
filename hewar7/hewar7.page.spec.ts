import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar7Page } from './hewar7.page';

describe('Hewar7Page', () => {
  let component: Hewar7Page;
  let fixture: ComponentFixture<Hewar7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
