import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khotabjmaa31Page } from './khotabjmaa31.page';

describe('Khotabjmaa31Page', () => {
  let component: Khotabjmaa31Page;
  let fixture: ComponentFixture<Khotabjmaa31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khotabjmaa31Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khotabjmaa31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
