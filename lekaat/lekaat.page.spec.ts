import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekaatPage } from './lekaat.page';

describe('LekaatPage', () => {
  let component: LekaatPage;
  let fixture: ComponentFixture<LekaatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekaatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
