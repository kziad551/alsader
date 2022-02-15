import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khotabjmaa43Page } from './khotabjmaa43.page';

describe('Khotabjmaa43Page', () => {
  let component: Khotabjmaa43Page;
  let fixture: ComponentFixture<Khotabjmaa43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khotabjmaa43Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khotabjmaa43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
