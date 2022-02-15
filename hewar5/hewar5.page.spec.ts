import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar5Page } from './hewar5.page';

describe('Hewar5Page', () => {
  let component: Hewar5Page;
  let fixture: ComponentFixture<Hewar5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
