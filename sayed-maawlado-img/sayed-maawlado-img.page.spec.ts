import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedMaawladoImgPage } from './sayed-maawlado-img.page';

describe('SayedMaawladoImgPage', () => {
  let component: SayedMaawladoImgPage;
  let fixture: ComponentFixture<SayedMaawladoImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedMaawladoImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedMaawladoImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
