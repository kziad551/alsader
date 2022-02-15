import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuwarPage } from './suwar.page';

describe('SuwarPage', () => {
  let component: SuwarPage;
  let fixture: ComponentFixture<SuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuwarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
