import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaTakrer3lmusulPage } from './mawsua-takrer3lmusul.page';

describe('MawsuaTakrer3lmusulPage', () => {
  let component: MawsuaTakrer3lmusulPage;
  let fixture: ComponentFixture<MawsuaTakrer3lmusulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaTakrer3lmusulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaTakrer3lmusulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
