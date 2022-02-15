import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar3Page } from './hewar3.page';

describe('Hewar3Page', () => {
  let component: Hewar3Page;
  let fixture: ComponentFixture<Hewar3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
