import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkadAlsayedPage } from './markad-alsayed.page';

describe('MarkadAlsayedPage', () => {
  let component: MarkadAlsayedPage;
  let fixture: ComponentFixture<MarkadAlsayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkadAlsayedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkadAlsayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
