import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedSalatjmaaImgPage } from './sayed-salatjmaa-img.page';

describe('SayedSalatjmaaImgPage', () => {
  let component: SayedSalatjmaaImgPage;
  let fixture: ComponentFixture<SayedSalatjmaaImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedSalatjmaaImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedSalatjmaaImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
