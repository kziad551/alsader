import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedMajamaherImgPage } from './sayed-majamaher-img.page';

describe('SayedMajamaherImgPage', () => {
  let component: SayedMajamaherImgPage;
  let fixture: ComponentFixture<SayedMajamaherImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedMajamaherImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedMajamaherImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
