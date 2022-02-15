import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasaekyatPage } from './wasaekyat.page';

describe('WasaekyatPage', () => {
  let component: WasaekyatPage;
  let fixture: ComponentFixture<WasaekyatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasaekyatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasaekyatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
