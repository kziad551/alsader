import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Khotabjmaa18Page } from './khotabjmaa18.page';

describe('Khotabjmaa18Page', () => {
  let component: Khotabjmaa18Page;
  let fixture: ComponentFixture<Khotabjmaa18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Khotabjmaa18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Khotabjmaa18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
