import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khotabjmaa13Page } from './khotabjmaa13.page';

describe('Khotabjmaa13Page', () => {
  let component: Khotabjmaa13Page;
  let fixture: ComponentFixture<Khotabjmaa13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khotabjmaa13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khotabjmaa13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
