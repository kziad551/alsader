import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekaatmareyaPage } from './lekaatmareya.page';

describe('LekaatmareyaPage', () => {
  let component: LekaatmareyaPage;
  let fixture: ComponentFixture<LekaatmareyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatmareyaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekaatmareyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
