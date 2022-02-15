import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar6Page } from './hewar6.page';

describe('Hewar6Page', () => {
  let component: Hewar6Page;
  let fixture: ComponentFixture<Hewar6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
