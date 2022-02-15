import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar4Page } from './hewar4.page';

describe('Hewar4Page', () => {
  let component: Hewar4Page;
  let fixture: ComponentFixture<Hewar4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
