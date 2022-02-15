import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khotabjmaa37Page } from './khotabjmaa37.page';

describe('Khotabjmaa37Page', () => {
  let component: Khotabjmaa37Page;
  let fixture: ComponentFixture<Khotabjmaa37Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khotabjmaa37Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khotabjmaa37Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
