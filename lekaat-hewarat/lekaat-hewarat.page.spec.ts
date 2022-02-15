import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekaatHewaratPage } from './lekaat-hewarat.page';

describe('LekaatHewaratPage', () => {
  let component: LekaatHewaratPage;
  let fixture: ComponentFixture<LekaatHewaratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatHewaratPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekaatHewaratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
