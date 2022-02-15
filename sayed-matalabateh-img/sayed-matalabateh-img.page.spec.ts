import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedMatalabatehImgPage } from './sayed-matalabateh-img.page';

describe('SayedMatalabatehImgPage', () => {
  let component: SayedMatalabatehImgPage;
  let fixture: ComponentFixture<SayedMatalabatehImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedMatalabatehImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedMatalabatehImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
