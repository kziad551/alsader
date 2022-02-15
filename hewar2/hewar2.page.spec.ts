import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar2Page } from './hewar2.page';

describe('Hewar2Page', () => {
  let component: Hewar2Page;
  let fixture: ComponentFixture<Hewar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
