import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedMaashahedawalImgPage } from './sayed-maashahedawal-img.page';

describe('SayedMaashahedawalImgPage', () => {
  let component: SayedMaashahedawalImgPage;
  let fixture: ComponentFixture<SayedMaashahedawalImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedMaashahedawalImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedMaashahedawalImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
