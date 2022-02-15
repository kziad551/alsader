import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hewar1Page } from './hewar1.page';

describe('Hewar1Page', () => {
  let component: Hewar1Page;
  let fixture: ComponentFixture<Hewar1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hewar1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hewar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
